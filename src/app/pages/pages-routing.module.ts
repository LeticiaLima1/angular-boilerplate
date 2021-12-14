import { ClienteIncluirComponent } from './clientes/cliente-incluir/cliente-incluir.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { ClienteListarComponent } from './clientes/cliente-listar/cliente-listar.component';
import { ClienteConsultarComponent } from './clientes/cliente-consultar/cliente-consultar.component';
import { ClienteExcluirComponent } from './clientes/cliente-excluir/cliente-excluir.component';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
        children: [
			{
				path: 'cliente-incluir',
				component: ClienteIncluirComponent,
			},
			{ 
				path: 'cliente-listar',
				component: ClienteListarComponent,
			},
			{ 
				path: 'cliente-consultar',
				component: ClienteConsultarComponent,
			},
			{ 
				path: 'cliente-excluir',
				component: ClienteExcluirComponent,
			}
			
			
        ],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
