import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-excluir',
  templateUrl: './cliente-excluir.component.html',
  styleUrls: ['./cliente-excluir.component.css']
})
export class ClienteExcluirComponent implements OnInit {

  public nome: string;
  public showMsg: boolean;

    constructor(private clienteService: ClienteService) { }

    ngOnInit(): void {
      this.nome = '';
      this.showMsg = false;
    }

    excluirCliente(): void{
      this.clienteService.excluir(this.nome);
      this.showMsg = true;
    }


}
