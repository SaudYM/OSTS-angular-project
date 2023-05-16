import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { OSTsComponent } from './OSTs/OSTs.component';
import { FormsModule } from "@angular/forms";
import { SOSTComponent } from './s-ost/s-ost.component';

@NgModule(
{

    declarations:[AppComponent, OSTsComponent, SOSTComponent],
    imports:[BrowserModule,FormsModule],
    bootstrap:[AppComponent],
}

 )
export class AppModule{}
