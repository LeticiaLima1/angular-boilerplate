import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AtividadesComponent } from "./atividades/atividades.component";
import { GerenciarListasComponent } from "./gerenciar-listas/gerenciar-listas.component";
import { HistoricoComponent } from "./historico/historico.component";
import { ListaMembrosComponent } from "./lista-membros/lista-membros.component";
import { ListasDeAtividadesComponent } from "./listas-de-atividades/listas-de-atividades.component";
import { NovoMembroComponent } from "./novo-membro/novo-membro.component";
import { PagesComponent } from "./pages.component";

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
				path: 'lista-membros',
				component: ListaMembrosComponent,
			},
			{
				path: 'lista-membros/novo-membro',
				component: NovoMembroComponent
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
