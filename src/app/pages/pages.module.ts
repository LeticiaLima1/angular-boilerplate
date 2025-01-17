import { ClienteIncluirComponent } from './clientes/cliente-incluir/cliente-incluir.component';
import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteConsultarComponent } from './clientes/cliente-consultar/cliente-consultar.component';

@NgModule({
	imports: [
        PagesRoutingModule,
        ThemeModule,
        CommonModule,
        FormsModule,
	],
	declarations: [
		PagesComponent,
        ClienteIncluirComponent,
        ClienteConsultarComponent
	],
	providers: []
})
export class PagesModule { }
