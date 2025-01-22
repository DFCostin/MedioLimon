import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css',
    standalone: false
})
export class ExperienceComponent implements OnInit, OnDestroy {

  public InformationJobs: any;
  public translations: any;
  public langChangeSubscription: Subscription | undefined;
  public onlyDevelop: boolean = false;
  public textButton: string = "";


  constructor(private translate: TranslateService) {
    const browserLang = this.translate.getBrowserLang() || 'en';
    this.loadTranslations(browserLang);
  }

  ngOnInit() {
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTranslations(event.lang);
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  loadTranslations(lang: string) {
    this.translate.getTranslation(lang).subscribe((translations: any) => {
      this.translations = translations;
      this.setDefaultButtonText();
      this.displayJobs();
    });
  }

  setDefaultButtonText() {
    this.textButton = this.translations && this.translations['on-developer'] ? this.translations['on-developer'] : this.translations['out-developer'];
  }

  justDeveloper() {
    this.onlyDevelop = !this.onlyDevelop;
    this.textButton = this.onlyDevelop ? this.translations['out-developer'] : this.translations['on-developer'];
    this.displayJobs();
  }

  displayJobs() {
    this.InformationJobs = [];
    if (this.translations && this.translations['experienceOfJob']) {
      const experienceOfJob = this.translations['experienceOfJob'];
      experienceOfJob.forEach((job: any) => {
        if (job.type === 'developer' && !this.onlyDevelop) {
          this.InformationJobs.push(job);
        } else if (this.onlyDevelop) {
          this.InformationJobs.push(job);
        }
      });
    }
  }

}
