import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuestionsComponentComponent } from './questions-component/questions-component.component';
import { QuestionComponentComponent } from './question-component/question-component.component';
import { HomepageModule } from './homepage/homepage.module';
import { CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuestionsComponentComponent,
    QuestionComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
