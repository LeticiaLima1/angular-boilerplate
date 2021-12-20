import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { ListaMembrosComponent } from './lista-membros/lista-membros.component';
import { CabecalhoModule } from "../componentes/cabecalho/cabecalho.module";
import { NovoMembroComponent } from './novo-membro/novo-membro.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { CartaoModule } from "../componentes/cartao/cartao.module";
import { MembroComponent } from "../componentes/membro/membro.component";
import { MensagemModule } from "../componentes/mensagem/mensagem.module";



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
		MensagemModule
	],
	declarations: [
		PagesComponent,
		ListaMembrosComponent,
		NovoMembroComponent,
		MembroComponent
	],
	providers: []
})
export class PagesModule { }
