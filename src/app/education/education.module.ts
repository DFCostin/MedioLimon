import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { TranslateModule } from '@ngx-translate/core';
import { TitelComponentModule } from '../titel-component/titel-component.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    EducationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    TitelComponentModule,
    MatCardModule
  ],
  exports: [ 
    EducationComponent
  ]
})
export class EducationModule { }
