import { Component, Input, input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-titel-component',
    templateUrl: './titel-component.component.html',
    styleUrl: './titel-component.component.css',
    standalone: false
})

export class TitelComponentComponent {
  @Input()  titel: string = "";
  constructor(private translate: TranslateService) {}
}
