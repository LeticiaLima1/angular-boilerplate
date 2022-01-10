import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetalhesComponent } from './dialog-detalhes/dialog-detalhes.component';


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {

  selected = 'option2';

  constructor(
    private dialog: MatDialog,

    ) {}  
  
  openDialogDetalhes(): void {
    this.dialog.open(DialogDetalhesComponent, {
      width: '100%',
    });
  }

}

