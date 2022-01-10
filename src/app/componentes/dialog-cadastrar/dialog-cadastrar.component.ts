import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Membro } from 'src/app/models/membros';
import { MembrosService } from 'src/app/pages/membros.service';
import { DialogConfirmacaoComponent } from '../dialog-confirmacao/dialog-confirmacao.component';
import { DialogErroComponent } from '../dialog-erro/dialog-erro.component';
import { DialogSucessoComponent } from '../dialog-sucesso/dialog-sucesso.component';

@Component({
  selector: 'app-dialog-cadastrar',
  templateUrl: 'dialog-cadastrar.component.html',
  styleUrls: ['./dialog-cadastrar.component.css']

})

export class DialogCadastrarComponent implements OnInit {

  
  membro: Membro;
  membroService: MembrosService;
  preview!: string;
  file: File;
  mostrarPreview: boolean = false;
  nome: string;
  form: FormGroup;
  novoUsuarioForm!: FormGroup;
  mensagemErroDtNascimento: string;
  dataNascimento: Date;
  valorMesada: number;
  date: Date;
  datepipe: any;
  selectedOption: any;

  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogCadastrarComponent>,
    private novoMembroService: MembrosService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(['', [Validators.required]]),
      dataNascimento: new FormControl(['', [Validators.required]]),
      valorMesada: new FormControl(['', [Validators.required]]),
      foto: new FormControl(['', [Validators.required]]),
   });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cadastrar(): void {
    if(this.form.valid){
     const formData = this.preencheFormulario(this.file);
      this.novoMembroService.cadastraNovoMembro(formData).subscribe(() => {
        this.dialogRef.close(true);
        this.openDialogSucesso('Membro adicionado com sucesso!');
      },
      (httpErrorResponse: HttpErrorResponse) => {
        let listError: string = 'Algo deu errado: ';
        console.log(httpErrorResponse);
        if(httpErrorResponse.error.error[0].msg){
          httpErrorResponse.error.error.forEach(erro => {
              console.log(erro.msg);
              listError = listError + erro.msg;
            });
        }else{
          listError = listError + httpErrorResponse.error.error;
        }
        this.openDialogErro(listError);
      });
    }
  }

  preencheFormulario(file: File): FormData{
    const formData = new FormData();
    if (file){
      formData.append('type', file.type);
      formData.append('photo', file); 
    }
    formData.append('name', this.nome); 
    formData.append('birthdate', this.formataStringData(this.dataNascimento)); 
    formData.append('allowance', String(this.valorMesada));
    return formData;
  }

  formataStringData(data: Date): string {
    const dataString = data.toString();
    const ano = dataString.split("-")[0];
    const mes = dataString.split("-")[1];
    const dia = dataString.split("-")[2];
    return ("0"+dia).slice(-2)+ '/'  + ("0"+mes).slice(-2) + '/' + ano;
  }
  
  openDialogSucesso(texto: string): void {
    this.dialog.open(DialogSucessoComponent, {
      width: '100%',
      data: texto,
    });
  }

  openDialogErro(texto: string): void {
    const dialog = this.dialog.open(DialogErroComponent, {
      width: '100%',
      data: texto,
    });
    dialog.afterClosed().subscribe(result => {
      if(!result){
        this.dialogRef.close(true);
      }
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

  validarDataNascimento(): boolean {
    const dtNascimento = new Date(this.form.get('dataNascimento').value);
    const dtAtual = new Date();
    const idadeAnos: number = dtAtual.getFullYear() - dtNascimento.getFullYear();

    const dtNascimentoMais1 = dtNascimento.getTime();
    const dtAtualOffSet = dtAtual.getTime(); 

    if(dtNascimento.getUTCDate() == dtAtual.getUTCDate()){
      this.mensagemErroDtNascimento = "Data de nascimento não pode ser igual a hoje";
      return true;
    }
    
    if(dtNascimentoMais1 > dtAtualOffSet){
      this.mensagemErroDtNascimento = "Data de nascimento deve ser menor que hoje";
      return true;
    }

    if(idadeAnos > 18){
      this.mensagemErroDtNascimento = "Membro deve ter menos que 18 anos";
      return true;
    }

    return false;
  }

  cancelar(): void{
    this.openDialogConfirmacao('Deseja realmente cancelar esse cadastro?');
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
