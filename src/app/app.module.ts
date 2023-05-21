import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OSTsModule } from './OSTs/osts.module';
import { ListenComponent } from './listen/listen.component';
import { AppRoutingModule } from './app-routing.module';
import { PopOpComponent } from './OSTs/pop-op/pop-op.component';
import { NgxYoutubePlayerModule } from "ngx-youtube-player";

@NgModule({
  declarations: [AppComponent, ListenComponent, ListenComponent],
  imports: [BrowserModule, FormsModule, OSTsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
