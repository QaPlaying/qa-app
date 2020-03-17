import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../core/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) { }
  isloggedIn = false;

  ngOnInit(): void {
  }

  login() {
    this.loginService.login();
    this.isloggedIn = true;
    this.router.navigate(['/home']);
  }
}
