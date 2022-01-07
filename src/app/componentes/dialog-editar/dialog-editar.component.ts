import { HttpErrorResponse } from '@angular/common/http';
import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MembroAPI, MembroAPIPhoto } from 'src/app/models/membros';
import { MembrosService } from 'src/app/pages/membros.service';
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

  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public membroDialog: MembroAPI,
    public membroService: MembrosService) {
    this.membro = membroDialog;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarMembro(): void{
    const formData = new FormData();
    formData.append('type', this.fileX.type);
    // formData.append('description', this.fileX.name);
    formData.append('photo', this.preview); 

    const membroApi = new MembroAPIPhoto();
    membroApi.id = this.membro.id;
    membroApi.name = this.membro.name;
    membroApi.birthdate = this.membro.birthdate;
    membroApi.allowance = this.membro.allowance;
    membroApi.photo = this.file;

    this.membroService.editarMembro(membroApi).subscribe(
      (retorno) => {
        console.log(retorno);
        this.dialogRef.close();
        this.openDialogSucesso('Membro editado com sucesso!');
      },
      (retornoErro: HttpErrorResponse) => {
        console.log(retornoErro);
        let listErro: string = 'Erro ao editar membro: ';

        if(retornoErro.error.error.length > 0){
          retornoErro.error.error.forEach(element => {
            listErro = listErro + element.msg + ',';
          });
        }
        this.openDialogSucesso(listErro);
      } 
    );
  }
  
  openDialogSucesso(texto: string): void {
    this.dialog.open(DialogSucessoComponent, {
      width: '250px',
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
