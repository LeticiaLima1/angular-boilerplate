import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Atividade } from 'src/app/models/atividade';

@Component({
  selector: 'app-dialog-detalhes',
  templateUrl: 'dialog-detalhes.component.html',
  styleUrls: ['./dialog-detalhes.component.css']
})

export class DialogDetalhesComponent {

 
  
  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogDetalhesComponent>,
    @Inject(MAT_DIALOG_DATA) public atividadeDialog: Atividade,
    ) {}
  
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
