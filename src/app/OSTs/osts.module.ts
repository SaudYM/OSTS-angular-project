import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSTsService } from './osts.service';
import { OSTsComponent } from './OSTs.component';
import { SOSTComponent } from './s-ost/s-ost.component';
import { AppRoutingModule } from '../app-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PopOpComponent } from './pop-op/pop-op.component';

@NgModule({
  declarations: [OSTsComponent, SOSTComponent,PopOpComponent],
  providers: [OSTsService],
  imports: [CommonModule,AppRoutingModule,YouTubePlayerModule],
  exports: [OSTsComponent],
})
export class OSTsModule {}
