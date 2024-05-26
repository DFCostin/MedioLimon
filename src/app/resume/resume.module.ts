import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { TranslateModule } from '@ngx-translate/core';
import { TitelComponentModule } from '../titel-component/titel-component.module';



@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    TitelComponentModule
  ],
  exports : [
    ResumeComponent
  ]
})
export class ResumeModule { }
