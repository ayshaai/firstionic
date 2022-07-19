import { Component, OnInit } from '@angular/core';
// add this lib
import { Router } from '@angular/router';
@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.page.html',
  styleUrls: ['./pickup.page.scss'],
})
export class PickupPage implements OnInit {
  addnewpickup() {
    this.router.navigate(['/home']);
  }

  // add here private router: Router
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
