import { Component } from "@angular/core";
import {
  trigger,
  transition,
  style,
  animate,
  state
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("slide", [
      state("void", style({ opacity: 0 })),
      transition(":enter", animate(500)),
      transition(":leave", animate(500))
    ])
  ]
})
export class AppComponent {
  title = "angular-material";

  isChecked = false;

  onChange($event) {
    console.log($event);
  }
}
