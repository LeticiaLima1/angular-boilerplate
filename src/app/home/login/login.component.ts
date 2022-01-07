import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './../../autenticacao/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    email = '';
    senha = '';

    constructor(
        private authService:AutenticacaoService, 
        private router:Router,
        private tokenService:TokenService 
    ) {}

    login(): void {
        this.authService.autenticar(this.email, this.senha).subscribe((retorno)=> {
            this.tokenService.salvaToken(retorno.data);
            this.router.navigate(['pages/listas-de-atividades']);
            }, 
        (error) => {
            alert("E-mail ou senha inválido");
            console.log(error);
        }
        );
    }

}
