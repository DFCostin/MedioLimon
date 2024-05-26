import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { TranslateModule } from '@ngx-translate/core';
import {MatCardModule} from '@angular/material/card';
import { TitelComponentModule } from '../titel-component/titel-component.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    TitelComponentModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
