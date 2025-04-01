import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookiesPoliticComponent } from './cookies-politic.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    CookiesPoliticComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports:[
    CookiesPoliticComponent
  ]
})
export class CookiesPoliticModule { }
