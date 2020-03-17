import { Component, OnInit } from '@angular/core';
import {QuestionComponentComponent} from '../../question-component/question-component.component';
import {QuestionsComponentComponent} from '../../questions-component/questions-component.component';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './logged-in.component.html',
})
export class LoggedInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
