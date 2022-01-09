import {Component, Inject} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSucessoComponent } from 'src/app/componentes/dialog-sucesso/dialog-sucesso.component';
import { Atividade } from 'src/app/models/atividade';

@Component({
  selector: 'app-dialog-editar-atividade',
  templateUrl: 'dialog-editar-atividade.component.html',
  styleUrls: ['./dialog-editar-atividade.component.css']

})

export class DialogEditarAtividadeComponent {

  titulo: string = 'Editar atividade';
  corpo: string = 'Altere os dados abaixo para editar uma atividade no RIOTT.';
  atividade: Atividade;
  form: FormGroup;
  formControlName: "descricao"
  // atividadeService: AtividadeService;


  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogEditarAtividadeComponent>,
    @Inject(MAT_DIALOG_DATA) public atividadeDialog: Atividade
    )
    {
    this.atividade = atividadeDialog;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarAtividade(): void{
    // this.atividadeService.editarAtividade(this.atividade.id);
    this.dialogRef.close();
    this.openDialogSucesso('Atividade editada com sucesso!');
  }
  
  openDialogSucesso(texto: string): void {
    this.dialog.open(DialogSucessoComponent, {
      width: '100%',
      data: texto,
    });
  }
}
