import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-large',
  template: `
    <h2>{{messageContent}}</h2>
    `
})
export class HeaderMessageComponent implements OnInit {
  messageContent: string;
  constructor() {}
  ngOnInit() {

  }
  @Input() get message(): string {
    return this.messageContent;
  }

  set message(message) {
    this.messageContent = message;
  }
}
