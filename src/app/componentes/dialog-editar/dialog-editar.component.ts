import { HttpErrorResponse } from '@angular/common/http';
import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MembroAPI } from 'src/app/models/membros';
import { MembrosService } from 'src/app/pages/membros.service';
import { DialogErroComponent } from '../dialog-erro/dialog-erro.component';
import { DialogSucessoComponent } from '../dialog-sucesso/dialog-sucesso.component';

@Component({
  selector: 'app-dialog-editar',
  templateUrl: 'dialog-editar.component.html',
  styleUrls: ['./dialog-editar.component.css']

})

export class DialogEditarComponent {

  titulo: string = 'Editar membro';
  corpo: string = 'Altere os dados abaixo para editar o cadastro de um membro no RIOTT.';
  membro: MembroAPI;
  preview!: string;
  file: File;
  mostrarPreview: boolean = false;
  fileX: any;
  urlPhoto: string;

  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public membroDialog: MembroAPI,
    public membroService: MembrosService) {
    this.membro = membroDialog;
    this.preview = this.membro.photo;
    this.urlPhoto = this.membro.photo;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarMembro(): void{
    if(this.file) {

      const formData = this.preencheFormulario(this.file);

      this.chamarEditarMembro(formData);

      
    } else {

      fetch(this.urlPhoto)
        .then(async response => {
  
          const contentType = response.headers.get('content-type');
          const type = contentType.split('/')[1];
          const fileName = this.membro.name+'.'+type;
          const blob = await response.blob();
          const file = new File([blob], fileName, { 'type': contentType});

  
          const formData = this.preencheFormulario(file);
      
          this.chamarEditarMembro(formData);

        });
    }
  }

  preencheFormulario(file: File): FormData{
    const formData = new FormData();
    formData.append('type', file.type);
    formData.append('photo', file); 
    formData.append('id', this.membro.id); 
    formData.append('name', this.membro.name); 
    formData.append('birthdate', this.membro.birthdate); 
    formData.append('allowance', String(this.membro.allowance));
    return formData;
  }


  chamarEditarMembro(form: FormData): void{
    this.membroService.editarMembro(form).subscribe(
      (retorno) => {
        console.log(retorno);
        this.dialogRef.close(true);
        this.openDialogSucesso('Membro editado com sucesso!');
      },
      (httpErrorResponse: HttpErrorResponse) => {
        console.log(httpErrorResponse);
        const listErro: string = 'Erro ao editar membro: '+httpErrorResponse.error.error;

        // if(retornoErro.error.error.length > 0){
        //   retornoErro.error.error.forEach(element => {
        //     listErro = listErro + element.msg + ',';
        //   });
        // }
        this.openDialogErro(listErro);
      } 
    );

  }
  openDialogErro(texto: string): void {
    const dialog  = this.dialog.open(DialogErroComponent, {
      width: '100%',
      data: texto,
    });  

    dialog.afterClosed().subscribe(result => {
      if(!result){
        this.dialogRef.close(true);
      }
    });
  }
  
  openDialogSucesso(texto: string): void {
    this.dialog.open(DialogSucessoComponent, {
      width: '100%',
      data: texto,
    });
  }

  gravaArquivo(arquivo: any): void {
    this.fileX = arquivo.files[0];
    if(this.validarUploadArquivo(arquivo)){
      const [file] = arquivo?.files;
      this.file = file;
      const reader = new FileReader();
      reader.onload = (event:any): void=> (this.preview = event.target.result);
      reader.readAsDataURL(file);
    }
  }

  validarUploadArquivo(el: { files: { size: any; }[]; }): boolean {
    const maxfilesize = (1024 * 1024)*10,  // 10 Mb
        filesize    = el.files[0].size,
        warningel   = document.getElementById( 'lbError' );
  
    if ( filesize > maxfilesize ) {
      warningel.innerHTML = "A foto grande demais: " + filesize + ". Tamanho máximo deve ser: " + maxfilesize;
      this.mostrarPreview = false;
      return false;

    } else {
      warningel.innerHTML = '';
      this.mostrarPreview = false;
      return true;
    }   
  }
}
