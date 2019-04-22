import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogPassedData } from "../model/DialogPassedData";

@Component({
  selector: "app-dialog-panel",
  templateUrl: "./dialog-panel.component.html",
  styleUrls: ["./dialog-panel.component.css"]
})
export class DialogPanelComponent implements OnInit {
  title: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) passedData: DialogPassedData,
    public dialogRef: MatDialogRef<DialogPanelComponent>
  ) {
    this.title = passedData.animal; // to pass data from parent to child
  }

  ngOnInit() {}

  onClick(): void {
    this.dialogRef.close(this.title); // to pass data from child to parent
  }
}
