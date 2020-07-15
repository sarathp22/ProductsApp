import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupData= {fname:'',lname:'',phone:'',email:'',password:''};
errData="";
  constructor(private productService:ProductService, private router:Router) {}
signupUser()
{
  console.log(this.signupData);
  this.productService.signupNew(this.signupData)
  .subscribe(data =>{
    this.router.navigate(['login'])
    console.log(data)},
    err=>{
      console.log(err.error.error);
      
      this.errData=err.error.error}
    )
  
}
  ngOnInit(): void {
  }

}
