import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public productService:ProductService,private router:Router) { }
  title:String ="Product Management";
  logoutUser()
  {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
  ngOnInit(): void {
  }

}
