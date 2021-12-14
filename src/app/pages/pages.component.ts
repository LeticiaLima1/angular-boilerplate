import { ClienteService } from './clientes/services/cliente.service';
import { Component, OnInit } from "@angular/core";
import { Cliente } from '../shared/cliente';

@Component({
	selector: 'app-pages',
	styleUrls: ['pages.component.scss'],
	templateUrl: 'pages.component.html',
})
export class PagesComponent implements OnInit{

    public clientes: Cliente[] = [];
    public headers = ["Name", "Telefone", "Email", "Status"];

    constructor (private clienteService: ClienteService){}

    ngOnInit(): void {
        this.clientes = this.clienteService.listar();
    }
}
