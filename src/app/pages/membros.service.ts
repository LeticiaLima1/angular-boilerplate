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

  // buscarMembros(){
    // {
    //   "status": true,
    //   "date": "2021-12-22T15:22:04.979Z",
    //   "data": [
    //     {
    //       "id": "61c33bf505f8080034006306",
    //       "name": "Leticia Lima",
    //       "photo": "460f35cc4239e94cf64635f7209938fb-1640184821119-212695775.jpeg",
    //       "birthdate": "11/02/2004",
    //      "allowance": 1000.5
    //     }
    //   ]
    // }
  //   return this.http.get<Membros>(`${API}/${nomeDoUsuario}/membros`);
  // }

  searchHeroes(term: string): Observable<Membro[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Membro[]>(this.heroesUrl, options)
      .pipe(
        catchError(this.handleError<Membro[]>('searchHeroes', []))
      );
  }

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