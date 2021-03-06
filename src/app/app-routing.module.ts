import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatRaisedButtonComponent } from './component/mat-raised-button/mat-raised-button.component';
import { MatGridListComponent } from './component/mat-grid-list/mat-grid-list.component';
import { MatTabGroupComponent } from './component/mat-tab-group/mat-tab-group.component';

const routes: Routes = [
  { path: 'mat-raised-button', component: MatRaisedButtonComponent },
  { path: 'mat-tab-group', component: MatTabGroupComponent },
  { path: 'mat-grid-list', component: MatGridListComponent },
  { path: '', redirectTo: '/mat-raised-button', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
