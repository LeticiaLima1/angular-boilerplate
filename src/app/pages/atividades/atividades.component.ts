import { Component } from '@angular/core';
import { Atividade } from 'src/app/models/atividade';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent {

  listaAtividades: Atividade[] = [
    {
      descricao: 'Tirar lixo' ,
      
    },
    {
      descricao: 'Arrumar a cama' ,
      
    },
    {
      descricao: 'Guardar sapatos' ,
      
    }
  ]
}
