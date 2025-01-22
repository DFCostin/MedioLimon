import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.css',
    standalone: false
})
export class ResumeComponent implements OnInit {
  public rutaPDF: any;


  constructor(private translateService: TranslateService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.actualizarRutaPDF();

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.actualizarRutaPDF();
    });
  }

  private actualizarRutaPDF(): void {
    const idioma = this.translateService.currentLang;
    switch (idioma) {
      case 'es':
        this.rutaPDF = this.sanitizer.bypassSecurityTrustResourceUrl('assets/resume/cv_es.pdf');
        break;
      case 'en':
        this.rutaPDF = this.sanitizer.bypassSecurityTrustResourceUrl('assets/resume/cv_en.pdf');
        break;
      default:
        this.rutaPDF = this.sanitizer.bypassSecurityTrustResourceUrl('assets/resume/cv_en.pdf');
    }
  }
}
