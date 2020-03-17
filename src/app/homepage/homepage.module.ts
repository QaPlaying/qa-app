import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent} from './homepage.component';
import { NotLoggedInComponent } from './not-loggedIn/not-logged-in.component';
import { LoggedInComponent } from './loggedIn/logged-in.component';
import { HomepageRoutingModule} from './homepage-routing.module';
import { LogInComponent } from './login/log-in.component';
import { HeaderMessageComponent } from '../shared/messages/header-message.component';
import { BannerMessageComponent } from '../shared/messages/banner-message.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { QuestionsComponentComponent} from '../questions-component/questions-component.component';
import { QuestionComponentComponent } from '../question-component/question-component.component';

@NgModule({
  imports: [CommonModule, HomepageRoutingModule],
  declarations: [NotLoggedInComponent, LoggedInComponent, HomepageComponent, LogInComponent
    , HeaderMessageComponent, BannerMessageComponent, NavBarComponent, QuestionsComponentComponent, QuestionComponentComponent],
  exports: [ HomepageComponent ]
})
export class HomepageModule { }
