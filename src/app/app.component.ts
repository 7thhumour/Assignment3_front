import { Component,AfterContentChecked, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {
  @ViewChild('sidenav', {static:true}) sidenav!: MatSidenav;

  isLoggedIn = false;

  constructor(private router: Router) {}
  
  toggleSidenav(){
    this.sidenav.toggle();
  }

  ngAfterContentChecked(){
    if(localStorage.getItem('User'))
    {
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn = false;
    }
  }

  logout(){
    if(localStorage.getItem('User'))
    {
      localStorage.removeItem('User')
      this.router.navigateByUrl('login');
    }
  }

}
