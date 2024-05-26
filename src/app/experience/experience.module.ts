import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { TranslateModule } from '@ngx-translate/core';
import { TitelComponentModule } from '../titel-component/titel-component.module';
import { CardExperienceModule } from '../card-experience/card-experience.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    TitelComponentModule,
    CardExperienceModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
