import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { MatGridListComponent } from './component/mat-grid-list/mat-grid-list.component';
import { MatRaisedButtonComponent } from './component/mat-raised-button/mat-raised-button.component';
import { HttpClientModule } from '@angular/common/http';
import { TopicService } from './service/topic.service';
import { MatTabGroupComponent } from './component/mat-tab-group/mat-tab-group.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    MatGridListComponent,
    MatRaisedButtonComponent,
    MatTabGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
