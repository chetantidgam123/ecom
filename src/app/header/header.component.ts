import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  item_count:any

  constructor(
    private route:Router
  ){}
  gotoCartPage(){
    this.route.navigate(['/cartPage'])
  }
}
