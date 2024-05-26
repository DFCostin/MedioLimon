import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { TranslateModule } from '@ngx-translate/core';
import { TitelComponentModule } from '../titel-component/titel-component.module';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    TitelComponentModule,
    MatCardModule,
    TranslateModule,
    MatIcon
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
