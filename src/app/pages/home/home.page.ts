import { Component, OnInit } from '@angular/core';
// add this lib
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showcall() {
    this.router.navigate(['/pickup-calls']);
  }
  addnew() {
    this.router.navigate(['/pickup']);
  }

   // add here private router: Router
 constructor(private router: Router) { }

  ngOnInit() {
  }

}
