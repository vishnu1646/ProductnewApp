import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  procode = ""
  proname = ""
  date = ""
  expirydate = ""
  brand = ""
  price = ""
  sellername = ""
  distname = ""
  constructor(private api:ApiService){}

  readValues =()=>{
    let data:any={procode: this.procode, proname: this.proname, date: this.date,
       expirydate: this.expirydate, 
       brand: this.brand, price: this.price,
        sellername: this.sellername, distname: this.distname }

this.api.addproduct(data).subscribe(
  (response)=>{
    console.log(response)
    alert("data added")
  }
)
  }}