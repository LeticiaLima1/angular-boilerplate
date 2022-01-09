import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogConfirmacaoComponent } from 'src/app/componentes/dialog-confirmacao/dialog-confirmacao.component';
import { DialogSucessoComponent } from 'src/app/componentes/dialog-sucesso/dialog-sucesso.component';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-dialog-cadastrar-atividade',
  templateUrl: 'dialog-cadastrar-atividade.component.html',
  styleUrls: ['./dialog-cadastrar-atividade.component.css']
})

export class DialogCadastrarAtividadeComponent implements OnInit {

  titulo: string = 'Cadastrar nova atividade:';
  corpo: string = 'Insira os dados abaixo para cadastrar uma nova atividade ao RIOTT.';
  descricao: string;
  form: FormGroup;
  
  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogCadastrarAtividadeComponent>,
    public atividadeService: AtividadeService
    ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      descricao: new FormControl(['', [Validators.required]]),
   });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cadastrar(): void {
    if(this.form.valid){
      const formData = new FormData();
      formData.append('description', this.descricao);
      this.atividadeService.cadastrar(formData).subscribe(
        () => {
          this.dialogRef.close(true);
          this.openDialogSucesso('Atividade adicionada com sucesso!');
        },
        (error) => {
          console.log (error);
        });
    }
  }
  
  openDialogSucesso(texto: string): void {
    this.dialog.open(DialogSucessoComponent, {
      width: '100%',
      data: texto,
    });
  }

  cancelar(): void{
    this.openDialogConfirmacao('Deseja realmente cancelar?');
  }
  
  openDialogConfirmacao(pergunta: string): void {
    const dialog = this.dialog.open(DialogConfirmacaoComponent, {
      width: '100%',
      data: pergunta,
    });
    
    dialog.afterClosed().subscribe(result => {
      if(result){
        this.onNoClick();
      }
    });
  }
}
