import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitelComponentComponent } from './titel-component.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    TitelComponentComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TitelComponentComponent
  ]
})
export class TitelComponentModule { }
