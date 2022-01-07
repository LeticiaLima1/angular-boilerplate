import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../autenticacao/token.service';
import { environment } from '../environments/environment';
import { Membro, MembroAPI, MembroAPIPhoto, Membros, NovoMembro, RespostaMembroAPI } from '../models/membros';


const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class MembrosService {

  constructor(
    private http: HttpClient, 
    private tokenService:TokenService) { }

  listaDoUsuario(nomeDoUsuario:string):Observable<Membros>{
    return this.http.get<Membros>(`${API}/${nomeDoUsuario}/membros`);
  }

  buscaPorId(id:string):Observable<Membro>{
    return this.http.get<Membro>(`${API}/membros/${id}`);
  }

  excluiMembro(id: string): Observable<any>{
    const token = this.tokenService.retornaToken();

    const headers = new HttpHeaders({
      'accept': '*/*',
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete(`http://localhost:4444/v1/user/members/${id}`, { headers: headers });
   
  }

  inserirFoto(arquivo: File): Observable<HttpEvent<any>>{
    const formData = new FormData();
    formData.append('imageFile', arquivo);

    return this.http.post(`${API}/membros/inserirFoto`, formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  buscarListaMembros(): Observable<RespostaMembroAPI>{

    const token = this.tokenService.retornaToken();

    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<RespostaMembroAPI>('http://localhost:4444/v1/user/members', { headers: headers });
  }

  cadastraNovoMembro(novoMembro: NovoMembro): Observable<any>{
    return this.http.post(`${API}user/inserirMembro`, novoMembro);
  }

  editarMembro(membro: MembroAPIPhoto): Observable<any>{
    
    const token = this.tokenService.retornaToken();

    const headers = new HttpHeaders({
      'accept': '*/*',
      'Authorization': `Bearer ${token}`
    });

    return this.http.put('http://localhost:4444/v1/user/members', membro, { headers: headers });
  }
}