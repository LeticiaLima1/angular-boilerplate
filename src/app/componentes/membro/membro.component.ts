import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.css']
})
export class MembroComponent{

  private urlOriginal = '';

  @Input() nome = 'Letícia Lima';
  @Input() dataNascimento = '';
  @Input() valorMesada = '';

  @Input() set url(url:string) {
    if(url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = url;
    }
  }

  get url (): string{
    return this.urlOriginal;
  }
}
