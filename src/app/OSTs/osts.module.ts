import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSTsService } from './osts.service';
import { OSTsComponent } from './OSTs.component';
import { SOSTComponent } from './s-ost/s-ost.component';

@NgModule({
  declarations: [OSTsComponent, SOSTComponent],
  providers: [OSTsService],
  imports: [CommonModule],
  exports: [OSTsComponent],
})
export class OSTsModule {}
