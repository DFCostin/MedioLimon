import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
     TranslateModule,
     RouterModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
