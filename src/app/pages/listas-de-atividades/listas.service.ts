import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/autenticacao/token.service';
import { environment } from 'src/app/environments/environment';
import { ListaAtividadesResposta } from 'src/app/models/listas-atividades';
import { MembroValues } from 'src/app/models/membros';

const apiURL = environment.apiURL+'/lists';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
    ) { }

  buscarListaAtividadesPorMembroAtivas(membroValues: MembroValues): Observable<ListaAtividadesResposta>{
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ListaAtividadesResposta>(apiURL+'/'+membroValues.id+'/active', { headers: headers });
  }

  buscarListaAtividadesPorMembro(membroValues: MembroValues): Observable<ListaAtividadesResposta>{
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ListaAtividadesResposta>(apiURL+'/'+membroValues.id, { headers: headers });
  }
}
