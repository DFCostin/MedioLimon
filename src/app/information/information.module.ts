import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { TranslateModule } from '@ngx-translate/core';
import { AboutModule } from '../about/about.module';
import { ExperienceModule } from '../experience/experience.module';
import { ProjectsModule } from '../projects/projects.module';
import { SkillsModule } from '../skills/skills.module';
import { ContactModule } from '../contact/contact.module';
import { EducationModule } from '../education/education.module';
import { ResumeModule } from '../resume/resume.module';



@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    AboutModule,
    ExperienceModule,
    ProjectsModule,
    SkillsModule,
    ContactModule,
    EducationModule,
    ResumeModule
  ],
  exports : [
    InformationComponent
  ]
})
export class InformationModule { }
