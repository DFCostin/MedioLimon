import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: false
})
export class HeaderComponent {

  @Output() menuSelection = new EventEmitter<string>();

  isMenuOpen = false;
  currentLanguage = 'ES';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const dropdownMenu = document.querySelector('.dropdown-menu') as HTMLElement;
    if (dropdownMenu) {
      dropdownMenu.style.visibility = this.isMenuOpen ? 'visible' : 'hidden';
    }
    const headerContent = document.querySelector('.header-content') as HTMLElement;
    if (headerContent) {
      headerContent.style.borderTopLeftRadius = this.isMenuOpen ? '10px' : '30px';
      headerContent.style.borderTopRightRadius = this.isMenuOpen ? '10px' : '30px';
      headerContent.style.borderBottomLeftRadius = this.isMenuOpen ? '0' : '30px';
      headerContent.style.borderBottomRightRadius = this.isMenuOpen ? '0' : '30px';
    }

    const logoImg = document.querySelector('.logo img') as HTMLImageElement;
    if (logoImg) {
      logoImg.src = this.isMenuOpen
        ? '../assets/img/Limon_yellow.png'  // Imagen cuando el menú está abierto
        : '../assets/img/Limon_black.png';  // Imagen cuando el menú está cerrado
    }

  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.header-content') && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const logoImg = document.querySelector('.logo img') as HTMLImageElement;
    if (logoImg) {
      logoImg.src = this.isMenuOpen
        ? '../assets/img/Limon_yellow.png'  // Imagen cuando el menú está abierto
        : '../assets/img/Limon_black.png';  // Imagen cuando el menú está cerrado
    }
  }

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.addLangs(['vlc', 'es']);
    const lang = this.translateService.getBrowserLang();

    if (lang !== 'vlc' && lang !== 'es') {
      this.translateService.setDefaultLang('es');
      this.currentLanguage = 'es';
    } else {
      this.translateService.use(lang);
      this.currentLanguage = lang;
    }
  }

  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.translateService.use(language);
  }

  onSelect(menuItem: string): void {
    this.menuSelection.emit(menuItem);
    this.toggleMenu();
  }
}
