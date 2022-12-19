import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
email1:any;
pass:any;
model: any = {};
  constructor(){}
  ngOnInit(): void {
    
  }
  login(form:any){
    if(form.form.status=='VALID'){
      localStorage.setItem('login','true')
    }else{
    }
  }

}
