import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseLanguagesComponent } from './choose-languages.component';
import { ChooseLanguagesDirective } from './choose-languages.directive';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ChooseLanguagesComponent,
    ChooseLanguagesDirective
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule
  ],
  exports: [
    ChooseLanguagesComponent,
    ChooseLanguagesDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChooseLanguagesModule { }
