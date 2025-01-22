import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

import { ChooseLanguagesComponent } from '../choose-languages/choose-languages.component';
import { ScrollService } from '../scroll.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    standalone: false
})
export class MenuComponent implements OnInit {

  showButton: boolean = true;
  showMenu: boolean = false;
  public translate: any;
  public navItems = [
    { section: 'about', icon: 'ABOUT', label: 'about' },
    { section: 'experience', icon: 'EXPERIENCE', label: 'experience' },
    { section: 'projects', icon: 'PROJECTS', label: 'projects' },
    { section: 'skills', icon: 'SKILLS', label: 'skills' },
    { section: 'education', icon: 'EDUCATION', label: 'education' },
    { section: 'contact', icon: 'CONTACT', label: 'contact' },
    { section: 'resume', icon: 'RESUME', label: 'resume' }
  ];


  constructor(
    public dialog: MatDialog,
    private translateService: TranslateService,
    private scrollService: ScrollService
  ) {
    this.translate = this.translateService.currentLang;
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.checkScreenWidth();
    });
    this.checkScreenWidth();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  checkScreenWidth() {
    if (window.innerWidth < 991) {
      this.showButton = true;
      this.showMenu = false;
    } else {
      this.showButton = false;
      this.showMenu = true;
    }
  }

  chooseLanguages() {
    this.dialog.open(ChooseLanguagesComponent, { autoFocus: false });
  }

  scrollTo(section: string) {
    this.scrollService.triggerScroll(section);
  }
  
  handleItemClick(section: string) {
    this.scrollTo(section);
    this.showMenu = false;
  }


}
