import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { OSTComponent } from './OST/OST.component';
import { FormsModule } from "@angular/forms";

@NgModule(
{

    declarations:[AppComponent, OSTComponent],
    imports:[BrowserModule,FormsModule],
    bootstrap:[AppComponent],
}

 )
export class AppModule{}
