import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { HumanTeamComponent } from './human-team/human-team.component';
import { TrainingComponent } from './training/training.component';
import { InstalationComponent } from './instalation/instalation.component';
import { ContactComponent } from './contact/contact.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacityPoliticComponent } from './privacity-politic/privacity-politic.component';
import { CookiesPoliticComponent } from './cookies-politic/cookies-politic.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'image', component: ImageComponent },
  { path: 'team', component: HumanTeamComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'facilities', component: InstalationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacity-politic', component: PrivacityPoliticComponent },
  { path: 'cookies-politic', component: CookiesPoliticComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
