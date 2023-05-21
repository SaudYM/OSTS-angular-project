import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { OSTsComponent } from './OSTs/OSTs.component';
import { SOSTComponent } from './OSTs/s-ost/s-ost.component';
import { PopOpComponent } from './OSTs/pop-op/pop-op.component';

const routes: Routes = [
    
    { path: '', component: OSTsComponent },
    { path: 'ost', component: SOSTComponent },
    { path: 'preview/:vedio_id', component: PopOpComponent }


]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
