import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OSTsModule } from './OSTs/osts.module';
import { ListenComponent } from './listen/listen.component';

@NgModule({
  declarations: [AppComponent, ListenComponent, ListenComponent],
  imports: [BrowserModule, FormsModule, OSTsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
