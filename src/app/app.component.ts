import { Component, OnInit } from "@angular/core";
import {
  trigger,
  transition,
  style,
  animate,
  state
} from "@angular/animations";
import { MatChip } from "@angular/material/chips";
import { DataService } from "./services/data.service";
import { DialogPanelComponent } from "./dialog-panel/dialog-panel.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("slide", [
      state("void", style({ opacity: 0, transform: "translateY(-60px)" })),
      transition(":enter", animate(500)),
      transition(":leave", animate(500))
    ])
  ]
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;
  username: string;
  favorite: string;
  isChecked = true;
  min = new Date(2018, 3, 1);
  max = new Date(2018, 3, 30);
  dateChoosed: Date = this.min;
  color: string;
  animal: string;

  languages: string[] = ["Java", "C#", "JavaScript", "Ruby"];
  colors: {}[] = [
    { id: 1, name: "Blue" },
    { id: 2, name: "Green" },
    { id: 3, name: "Yellow" },
    { id: 4, name: "Black" }
  ];
  categories: Object[] = [
    { name: "Beginner" },
    { name: "Intermediate" },
    { name: "Advanced" }
  ];
  genders: string[] = ["Male", "Female"];

  courses: string[];

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit() {
    setTimeout(x => {
      this.isLoading = false;
      this.courses = this.dataService.getCourses();
    }, 3000);
  }

  onChange($event) {
    console.log($event);
  }

  onChoose($event: HTMLInputElement) {
    console.log($event.value);
  }

  categorySelecteed(cat: MatChip) {
    this.categories
      .filter(c => c !== cat)
      .forEach((cat: MatChip) => (cat.selected = false));
    cat.selected = !cat.selected;
  }

  openDialog() {
    this.dialog
      .open(DialogPanelComponent, {
        data: {
          animal: "this.animal"
        }
      })
      .afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }
}
