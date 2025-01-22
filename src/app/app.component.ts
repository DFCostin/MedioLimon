import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from './scroll.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'Protafolio';

  constructor(private translate: TranslateService, private scrollService: ScrollService) { }

  ngOnInit() {
    this.translate.addLangs(['en', 'es']);
    const lang = this.translate.getBrowserLang();
   
    if (lang !== 'en' && lang !== 'es') {
      this.translate.setDefaultLang('en');
    } else {
      this.translate.use(lang);
    }
    
    this.scrollService.scroll$.subscribe(target => {
      this.scrollTo(target);
    });
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
