import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtividadesComponent } from "./atividades/atividades.component";
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
				path: 'historico',
				component: HistoricoComponent,
			},
			{
				path: 'atividades',
				component: AtividadesComponent,
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
