import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardExperienceComponent } from './card-experience.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    CardExperienceComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    CardExperienceComponent
  ]
})
export class CardExperienceModule { }
