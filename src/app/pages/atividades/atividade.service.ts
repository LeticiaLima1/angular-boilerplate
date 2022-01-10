import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/app/environments/environment';
import { AtividadeResposta } from 'src/app/models/atividade';

const apiURL = environment.apiURL+'/tasks';

@Injectable({
  providedIn: 'root'
})

export class AtividadeService {

  constructor( 
    private http: HttpClient,
    private tokenService: TokenService) { 
    }

    buscar(): Observable<AtividadeResposta>{
      const token = this.tokenService.retornaToken();

      const headers = new HttpHeaders({
        'accept': '*/*',
        'Authorization': `Bearer ${token}`
      });
      return this.http.get<AtividadeResposta>(apiURL, { headers: headers });
    }

    cadastrar(formdata: FormData): Observable<any>{

      const token = this.tokenService.retornaToken();

      const headers = new HttpHeaders({
        'accept': '*/*',
        'Authorization': `Bearer ${token}`
      });
      return this.http.post<AtividadeResposta>(apiURL, formdata, { headers: headers });

    }

    excluir(id: string): Observable<any>{
      const token = this.tokenService.retornaToken();

      const headers = new HttpHeaders({
        'accept': '*/*',
        'Authorization': `Bearer ${token}`
      });
      return this.http.delete<AtividadeResposta>(apiURL+'/'+id, { headers: headers });

    }

    editar(formdata: FormData): Observable<any>{
      const token = this.tokenService.retornaToken();

      const headers = new HttpHeaders({
        'accept': '*/*',
        'Authorization': `Bearer ${token}`
      });
      return this.http.put<AtividadeResposta>(apiURL, formdata, { headers: headers });

    }

  }