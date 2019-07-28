import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, 
  MatSidenavModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const material = [
  MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule,
  FormsModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule,
  MatCardModule
];

@NgModule({
  imports: [
    material
  ],
  exports: [
    material
  ]
})

export class MaterialModule { }
