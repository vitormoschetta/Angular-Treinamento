import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}



@Component({
  selector: 'dialog-example-page',
  templateUrl: 'dialog-example-page.html',
})
export class DialogElementsExampleDialog {

  constructor(public dialogRef: MatDialogRef<DialogElementsExampleDialog>) { }

  onClose(): void {
    this.dialogRef.close();
  }
}