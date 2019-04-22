import { MaterialComponentsModule } from "./material-components.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { AppComponent } from "./app.component";
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from "@angular/forms";
import { DialogPanelComponent } from "./dialog-panel/dialog-panel.component";

@NgModule({
  declarations: [AppComponent, DialogPanelComponent],
  entryComponents: [DialogPanelComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MaterialComponentsModule // new module for organisation of all Mat-Components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
