import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminDemoDashboard';
  toggled = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion";
  ddlcollapsed = "nav-link collapsed";
  ddlopen = false;
userInfoOpen=false;
showhead:boolean=false;
  Leftmenuopen() {

    if (this.toggled == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {

      this.toggled = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled";
    }
    else {

      this.toggled = "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion";
    }
  }
  dropdownOpen() {
    this.ddlopen = !this.ddlopen;
    if (this.ddlcollapsed == "nav-link collapsed") {
      this.ddlcollapsed = "nav-link";
    }
    else {
      this.ddlcollapsed = "nav-link collapsed";
    }
  }
  UserInfoOpen()
  {
    this.userInfoOpen=!this.userInfoOpen;
  }
  constructor(private router: Router) {
    
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log('Event URL : ' + event['url']);
        if (event['url'] == '/') {
          this.showhead = false;
          
        } else {            
          this.showhead = true;
          
        }
      }
    });
  }
}
