import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

    public clientes: Cliente[] = [];

    constructor(private clienteService: ClienteService) { }

    ngOnInit(): void {
      this.clientes = this.clienteService.listar();
    }

}
