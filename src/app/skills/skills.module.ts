import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { TranslateModule } from '@ngx-translate/core';
import { TitelComponentModule } from '../titel-component/titel-component.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    TitelComponentModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [SkillsComponent]
})
export class SkillsModule { }
