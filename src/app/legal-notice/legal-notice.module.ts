import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalNoticeComponent } from './legal-notice.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LegalNoticeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    LegalNoticeComponent
  ]
})
export class LegalNoticeModule { }
