import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { ListaMembrosComponent } from './lista-membros/lista-membros.component';
import { CabecalhoModule } from "../componentes/cabecalho/cabecalho.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CartaoModule } from "../componentes/cartao/cartao.module";
import { MembroComponent } from "../componentes/membro/membro.component";
import { MensagemModule } from "../componentes/mensagem/mensagem.module";
import { HistoricoComponent } from './historico/historico.component';
import { ListasDeAtividadesComponent } from './listas-de-atividades/listas-de-atividades.component';
import { AtividadesComponent } from './atividades/atividades.component';
import { MembroExcluirComponent } from './lista-membros/membro-excluir/membro-excluir.component';
import { MembroEditarComponent } from './lista-membros/membro-editar/membro-editar.component';
import { DialogComponent } from "../componentes/dialog/dialog.component";
import { DialogSucessoComponent } from "../componentes/dialog-sucesso/dialog-sucesso.component";
import { DialogEditarComponent } from "../componentes/dialog-editar/dialog-editar.component";
import { DialogCadastrarComponent } from "../componentes/dialog-cadastrar/dialog-cadastrar.component";
import { DialogConfirmacaoComponent } from "../componentes/dialog-confirmacao/dialog-confirmacao.component";
import { DialogCadastrarAtividadeComponent } from "./atividades/dialog-cadastrar-atividade/dialog-cadastrar-atividade.component";
import { DialogExcluirAtividadeComponent } from "./atividades/dialog-excluir-atividade/dialog-excluir-atividade.component";
import { DialogEditarAtividadeComponent } from "./atividades/dialog-editar-atividade/dialog-editar-atividade.component";
import { DialogErroComponent } from "../componentes/dialog-erro/dialog-erro.component";
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';
import { DialogDetalhesComponent } from "./historico/dialog-detalhes/dialog-detalhes.component";
import { DialogGerenciarComponent } from "./listas-de-atividades/dialog-gerenciar/dialog-gerenciar.component";


@NgModule({
	imports: [
        PagesRoutingModule,
        ThemeModule,
		CabecalhoModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		MatInputModule,
		MatButtonModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatListModule,
		MatCardModule,
		CartaoModule,
		MensagemModule,
		ScrollingModule,
		MatSelectModule,
	],
	declarations: [
		PagesComponent,
		ListaMembrosComponent,
		MembroComponent,
		HistoricoComponent,
		ListasDeAtividadesComponent,
		AtividadesComponent,
		MembroExcluirComponent,
		MembroEditarComponent,
		DialogComponent,
		DialogSucessoComponent,
		DialogErroComponent,
		DialogEditarComponent,
		DialogCadastrarComponent,
		DialogConfirmacaoComponent,
		DialogCadastrarAtividadeComponent,
		DialogExcluirAtividadeComponent,
		DialogEditarAtividadeComponent,
		DialogDetalhesComponent,
		DialogGerenciarComponent
	],
	providers: [],
	entryComponents: [ 
		DialogComponent, 
		DialogSucessoComponent, 
		DialogEditarComponent, 
		DialogCadastrarComponent, 
		DialogConfirmacaoComponent,
		DialogCadastrarAtividadeComponent,
		DialogExcluirAtividadeComponent,
		DialogEditarAtividadeComponent,
		DialogErroComponent,
		DialogDetalhesComponent,
		DialogGerenciarComponent ]
})
export class PagesModule { }
