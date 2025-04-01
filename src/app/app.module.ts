import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollService } from './scroll.service';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';
import { FooterModule } from './footer/footer.module';
import { ContactModule } from './contact/contact.module';
import { LegalNoticeModule } from './legal-notice/legal-notice.module';
import { PrivacityPoliticModule } from './privacity-politic/privacity-politic.module';
import { CookiesPoliticModule } from './cookies-politic/cookies-politic.module';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        HeaderModule,
        RouterModule,
        FooterModule,
        ContactModule,
        LegalNoticeModule,
        PrivacityPoliticModule,
        CookiesPoliticModule
     ],
    providers: [ScrollService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}