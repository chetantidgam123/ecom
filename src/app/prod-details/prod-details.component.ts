import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {
name:any = '';
price:any ='';
img:any ='';
description:any ='';
cat:any ='';
cartData:any = []
data:any = ''
constructor(){}
  ngOnInit(): void {
    let data:any =''
    data =JSON.parse(localStorage.getItem('productDetails')||'')
    this.data = data
    if(data){
      this.name = data.title
      this.price = data.price
      this.img = data.image
      this.cat = data.category
      this.description = data.description
    }
    let a:any = ''
    a = localStorage.getItem('cartData')
    this.cartData = JSON.parse(a)||[]
  }

  addtoCart(){
    let a = localStorage.getItem('login') || ''
    if(a=='true'){
      this.cartData.push(this.data)
      localStorage.setItem('cartData',JSON.stringify(this.cartData))
    }else{
      // document.getElementById('modelopen')?.click()
    }
    }

}
