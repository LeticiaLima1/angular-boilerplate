import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/app/environments/environment';

const API = environment.apiURL

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.css']
})
export class MembroComponent implements OnInit {

  private urlOriginal = '';

  @Input() nome = 'Letícia Lima';
  @Input() dataNascimento = '';
  @Input() valorMesada = '';

  @Input() set url(url:string) {
    if(url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/imgs/${url}`;
    }
  }

  get url (): string{
    return this.urlOriginal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
