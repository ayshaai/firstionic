import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {
// add here private router: Router
  constructor(private router: Router) { }

  ngOnInit() {
    // add this to link pages
    // add we can set time to open from loader to login page after 1 seconds
    setTimeout(()=>{

      this.router.navigate(['/login'])
    }),1000
  }

}
