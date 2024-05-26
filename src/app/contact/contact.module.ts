import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TranslateModule } from '@ngx-translate/core';
import { TitelComponentModule } from '../titel-component/titel-component.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    TitelComponentModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
