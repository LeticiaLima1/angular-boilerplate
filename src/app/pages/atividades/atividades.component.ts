import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Atividade } from 'src/app/models/atividade';
import { AtividadeService } from './atividade.service';
import { DialogCadastrarAtividadeComponent } from './dialog-cadastrar-atividade/dialog-cadastrar-atividade.component';
import { DialogEditarAtividadeComponent } from './dialog-editar-atividade/dialog-editar-atividade.component';
import { DialogExcluirAtividadeComponent } from './dialog-excluir-atividade/dialog-excluir-atividade.component';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})

export class AtividadesComponent implements OnInit{

  listaAtividades : Atividade[];

  constructor(private dialog: MatDialog, private atividadeService: AtividadeService) {}  

  ngOnInit(): void {
    this.atividadeService.buscar().subscribe(
      (result) => {
        this.listaAtividades = [];
        this.listaAtividades = result.data;
      },
      (erro) => {
        console.log(erro);
      }
    );
  }

  

  // listaAtividades: Atividade[] = [
  //   {
  //     descricao: 'Tirar lixo' ,
      
  //   },
  //   {
  //     descricao: 'Arrumar a cama' ,
      
  //   },
  //   {
  //     descricao: 'Guardar sapatos' ,
      
  //   }
  // ];



  openDialogCadastrarAtividade(): void {
    const dialogo = this.dialog.open(DialogCadastrarAtividadeComponent, {
      width: '100%',
    });
    dialogo.afterClosed().subscribe(
      (resultado)  => {
        if(resultado) {
          this.atividadeService.buscar().subscribe(
            (result) => {
              this.listaAtividades = [];
              this.listaAtividades = result.data;
            },
            (erro) => {
              console.log(erro);
            }
          );
        }
      }
    );
  }

  openDialogExcluirAtividade(atividade: Atividade): void {
    const dialogo = this.dialog.open(DialogExcluirAtividadeComponent, {
      width: '100%',
      data: atividade,
    });
    dialogo.afterClosed().subscribe(
      (resultado)  => {
        if(resultado) {
          this.atividadeService.buscar().subscribe(
            (result) => {
              this.listaAtividades = [];
              this.listaAtividades = result.data;
            },
            (erro) => {
              console.log(erro);
            }
          );
        }
      }
    );
  }

  openDialogEditarAtividade(atividade: Atividade): void {
    const dialogo = this.dialog.open(DialogEditarAtividadeComponent, {
      width: '100%',
      data: atividade
    });
    dialogo.afterClosed().subscribe(
      (resultado)  => {
        if(resultado) {
          this.atividadeService.buscar().subscribe(
            (result) => {
              this.listaAtividades = [];
              this.listaAtividades = result.data;
            },
            (erro) => {
              console.log(erro);
            }
          );
        }
      }
    );
  }

}

