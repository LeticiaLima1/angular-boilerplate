import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Membro } from 'src/app/models/membros';
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
  membro: Membro;
  membroService: MembrosService;
  preview!: string;
  file: File;
  mostrarPreview: boolean = false;



  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public membroDialog: Membro) {
    this.membro = membroDialog;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarMembro(): void{
    // this.membroService.editarMembro(this.membro);
    this.dialogRef.close();
    this.openDialogSucesso('Membro editado com sucesso!');
  }
  
  openDialogSucesso(texto: string): void {
    this.dialog.open(DialogSucessoComponent, {
      width: '250px',
      data: texto,
    });
  }

  gravaArquivo(arquivo: any): void {
    if(this.validarUploadArquivo(arquivo)){
      const [file] = arquivo?.files;
      this.file = file;
      const reader = new FileReader();
      reader.onload = (event:any)=> (this.preview = event.target.result);
      reader.readAsDataURL(file);
    }
  }
  validarUploadArquivo(el: { files: { size: any; }[]; }) {
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
