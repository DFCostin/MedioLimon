import { Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-choose-languages',
    templateUrl: './choose-languages.component.html',
    styleUrls: ['./choose-languages.component.css'],
    standalone: false
})
export class ChooseLanguagesComponent {

  constructor(private translateService: TranslateService) { }

  selectLanguage(language: string) {
    this.translateService.use(language);
  }
}
