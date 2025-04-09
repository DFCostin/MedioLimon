import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ImageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ImageComponent
  ]
})
export class ImageModule { }
