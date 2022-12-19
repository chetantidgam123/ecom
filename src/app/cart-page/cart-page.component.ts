import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  list:any=[]
  total:any = 0
  email:any = ''
  add:any =''
  constructor(private router:Router){}
  ngOnInit(): void {
let a:any=''
 a= localStorage.getItem('cartData') || []
 this.list=JSON.parse(a)
 this.total = this.list.reduce((acc:any,ele:any)=>{
  return acc+ele.price
 },0)
 
  }
  removeItem(id:any){
    console.log(id);
    this.list.splice(id,1);
    localStorage.setItem('cartData',JSON.stringify(this.list))
    this.total = this.list.reduce((acc:any,ele:any)=>{
      return acc+ele.price
     },0)
  }
  checkout(){
    localStorage.removeItem('cartData');
    alert('Payment Succesful')
    this.router.navigate(['/home'])
  }

}
