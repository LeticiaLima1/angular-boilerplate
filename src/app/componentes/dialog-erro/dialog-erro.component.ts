import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-erro',
  templateUrl: 'dialog-erro.component.html',
  styleUrls: ['./dialog-erro.component.css']

})

export class DialogErroComponent {

  corpo: string;

  constructor(public dialogRef: MatDialogRef<DialogErroComponent>, @Inject(MAT_DIALOG_DATA) public texto: string) {
    this.corpo = texto;
  }

  tentarNovamente(): void {
    this.dialogRef.close(true);
  }

  voltarAoInicio(): void {
    this.dialogRef.close(false);
  }
}
