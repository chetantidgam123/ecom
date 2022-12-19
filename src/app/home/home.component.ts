import { ApiService } from './../Service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {
  email1:any;
pass:any;
model: any = {};

constructor(private router:Router,
  private api:ApiService){}
cartData:any = []
data:any=[]
  ngOnInit(): void {
    let a:any = ''
    a = localStorage.getItem('cartData')
    this.cartData = JSON.parse(a)||[]
    this.getProducts()
    
  }
getProducts(){
  this.api.getProducts().subscribe((data:any)=>{
    this.data = data
  })
}
login(form:any){
  if(form.form.status=='VALID'){
    localStorage.setItem('login','true')
    document.getElementById('closebtn')?.click()
  }else{
  }
}
  
  addtoCart(data:any){
    let a = localStorage.getItem('login') || ''
    if(a=='true'){
      this.cartData.push(data)
      localStorage.setItem('cartData',JSON.stringify(this.cartData))
    }else{
      document.getElementById('modelopen')?.click()
    }
    }
    gotoDetails(data:any,id:any){
      localStorage.setItem('productDetails',JSON.stringify(data))
      this.router.navigate([`/product/${id}`])
    }

}
