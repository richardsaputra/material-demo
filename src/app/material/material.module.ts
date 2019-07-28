import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, 
  MatSidenavModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule, MatCardModule, MatTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const material = [
  MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule,
  FormsModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatListModule, MatDividerModule, MatGridListModule, MatExpansionModule,
  MatCardModule, MatTabsModule
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
