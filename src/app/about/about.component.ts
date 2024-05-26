import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public edad : number = 0;
  constructor(private translate: TranslateService) {

    this.edad = new Date().getFullYear() - 1999;
   }
}
