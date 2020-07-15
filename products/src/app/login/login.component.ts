import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginData={email:"",password:""};
errData="";

  constructor(private productService:ProductService, private router:Router) { }
  loginUser()
  {
    this.productService.loginUserNew(this.loginData)
    .subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate([''])
                },
      err=>{
        console.log(err.error.error);
        
        this.errData=err.error.error}
    )
    }
  
  ngOnInit(): void {
  }

}
