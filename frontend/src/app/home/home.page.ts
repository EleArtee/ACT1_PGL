import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string = "ROOT";
  publisher: string = "2Tomatoes";

  constructor(private router: Router) {}

  gotoMyTTG(){
    this.router.navigateByUrl("/my-ttg")
  }

}
