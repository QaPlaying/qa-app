import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-med',
  template: `
    <h5>{{messageContent}}</h5>
    `
})
export class BannerMessageComponent implements OnInit {
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
