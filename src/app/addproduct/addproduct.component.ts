import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  procode=""
  proname=""
  date=""
  expirydate=""
  brand=""
  price=""
  sellername=""
  distname=""

  readValues=()=>{
    let data:any={procode:this.procode,proname:this.proname,date:this.date,expirydate:this.expirydate,brand:this.brand,price:this.price,sellername:this.sellername,distname:this.distname}
 console.log(data)
  }
  

  

}
