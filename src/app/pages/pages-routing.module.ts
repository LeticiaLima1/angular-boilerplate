import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtividadeCadastrarComponent } from "./atividades/atividade-cadastrar/atividade-cadastrar.component";
import { AtividadeEditarComponent } from "./atividades/atividade-editar/atividade-editar.component";
import { AtividadeExcluirComponent } from "./atividades/atividade-excluir/atividade-excluir.component";
import { AtividadesComponent } from "./atividades/atividades.component";
import { GerenciarListasComponent } from "./gerenciar-listas/gerenciar-listas.component";
import { HistoricoComponent } from "./historico/historico.component";
import { ListaMembrosComponent } from "./lista-membros/lista-membros.component";
import { ListasDeAtividadesComponent } from "./listas-de-atividades/listas-de-atividades.component";
import { NovoMembroComponent } from "./lista-membros/novo-membro/novo-membro.component";
import { PagesComponent } from "./pages.component";
import { MembroEditarComponent } from "./lista-membros/membro-editar/membro-editar.component";
import { MembroExcluirComponent } from "./lista-membros/membro-excluir/membro-excluir.component";

const routes: Routes = [

	{
		path: '',
		component: PagesComponent,
		children: [
			{
				path: 'listas-de-atividades',
				component: ListasDeAtividadesComponent,
			},
			{
				path: 'listas-de-atividades/gerenciarlistas',
				component: GerenciarListasComponent,
			},
			{
				path: 'historico',
				component: HistoricoComponent,
			},
			{
				path: 'atividades',
				component: AtividadesComponent,
			},
			{
				path: 'atividades/atividade-cadastrar',
				component: AtividadeCadastrarComponent,
			},
			{
				path: 'atividades/atividade-editar',
				component: AtividadeEditarComponent,
			},
			{
				path: 'atividades/atividade-excluir',
				component: AtividadeExcluirComponent,
			},
			{
				path: 'lista-membros',
				component: ListaMembrosComponent,
			},
			{
				path: 'lista-membros/novo-membro',
				component: NovoMembroComponent
			},
			{
				path: 'lista-membros/membro-editar',
				component: MembroEditarComponent
			},
			{
				path: 'lista-membros/membro-excluir',
				component: MembroExcluirComponent
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
