import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../autenticacao/token.service';
import { environment } from '../environments/environment';
import { Membro, Membros, NovoMembro } from '../models/membros';


const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class MembrosService {

  constructor(private http: HttpClient, private tokenService:TokenService) { }

  listaDoUsuario(nomeDoUsuario:string):Observable<Membros>{
    return this.http.get<Membros>(`${API}/${nomeDoUsuario}/membros`);
  }

  buscaPorId(id:string):Observable<Membro>{
    return this.http.get<Membro>(`${API}/membros/${id}`);
  }

  excluiMembro(id: string): Observable<Membro>{
    return this.http.delete<Membro>(`${API}/membros/${id}`);
  }

  inserirFoto(arquivo: File): Observable<HttpEvent<Object>>{
    const formData = new FormData();
    formData.append('imageFile', arquivo);

    return this.http.post(`${API}/membros/inserirFoto`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  cadastraNovoMembro(novoMembro: NovoMembro): Observable<Object>{
    return this.http.post(`${API}user/inserirMembro`, novoMembro);
  }

  editarMembro(novoMembro: Membro): Observable<Object>{
    return this.http.post(`${API}user/inserirMembro`, novoMembro);
  }
}