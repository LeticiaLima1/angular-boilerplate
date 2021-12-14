import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-incluir',
  templateUrl: './cliente-incluir.component.html',
  styleUrls: ['./cliente-incluir.component.html']
})
export class ClienteIncluirComponent implements OnInit{

    public cliente: Cliente;
    public showMsgSucesso: boolean = false;
    public showMsgErro: boolean = false;

    constructor(private clienteService: ClienteService) { }

    ngOnInit(): void {
        this.cliente = new Cliente();
    }

    public salvar(form: NgForm): void{
        console.log(form);

        if(form.valid){
            this.clienteService.salvar(this.cliente);
            this.showMsgSucesso = true;
        }else{
            this.showMsgErro = true;
            console.log('ERRO');
        }
    }
}
