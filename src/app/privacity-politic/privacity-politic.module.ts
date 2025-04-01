import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacityPoliticComponent } from './privacity-politic.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    PrivacityPoliticComponent
  ],
  imports: [
    CommonModule,
       TranslateModule,
       RouterModule
  ],
  exports: [
    PrivacityPoliticComponent
  ]
})
export class PrivacityPoliticModule { }
