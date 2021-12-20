import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaMembrosComponent } from "./lista-membros/lista-membros.component";
import { NovoMembroComponent } from "./novo-membro/novo-membro.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [

	{
		path: '',
		component: PagesComponent,
		children: [
			{
				path: 'lista-membros',
				component: ListaMembrosComponent,
			},
			{
				path: 'lista-membros/novo-membro',
				component: NovoMembroComponent
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
