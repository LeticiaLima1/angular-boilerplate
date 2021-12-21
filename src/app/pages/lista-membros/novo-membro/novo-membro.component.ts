import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NovoMembro } from '../../../models/membros';
import { MembrosService } from '../../membros.service';


@Component({
  selector: 'app-novo-membro',
  templateUrl: './novo-membro.component.html',
  styleUrls: ['./novo-membro.component.css']
})

export class NovoMembroComponent implements OnInit {

  form: FormGroup;
  file: File;
  preview!: string;
  mostrarPreview: boolean = false;
  novoUsuarioForm!: FormGroup;
  mensagemErroDtNascimento: string;
  nome: string;
  dataNascimento: Date;
  valorMesada: number;
  date: Date;
  datepipe: any;

  constructor(private router: Router, private novoMembroService: MembrosService) { 
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(['', [Validators.required]]),
      dataNascimento: new FormControl(),
      valorMesada: new FormControl(),
      foto: new FormControl(),
   });
  }
          
  cadastrar(): void {
    if(this.form.valid){
      const novoMembro: NovoMembro = { 
        foto: this.file,
        valorMesada: this.form.value.valorMesada, 
        nome: this.form.value.nome, 
        dataNascimento: this.form.value.dataNascimento 
      };
      this.novoMembroService.cadastraNovoMembro(novoMembro).subscribe(() => {
        this.voltar();
      },
      (error) => {
        console.log (error);
      });
    }
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

  voltar(): void {
    this.router.navigate(['/pages/lista-membros']);
  }
}