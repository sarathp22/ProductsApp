import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from './product.model';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String="Product List";
  products:ProductModel[];
  imageWidth: number =50;
  imageMargin: number =2;
  

  showImage: boolean =  false;
  constructor(private productService:ProductService,private router:Router ,private relativeTo:ActivatedRoute) { }
  
  toggleImage():void
  {
    this.showImage = !this.showImage;
  }
  data;
  editProduct(id)
  {
    this.data=JSON.stringify(id);
    console.log(this.data);
    this.router.navigate(['edit',this.data])
  }
idToDelete
  deleteProduct(id)
  {
    this.idToDelete=id;
    // console.log(`delete ${this.idToDelete}`);
    this.productService.deletedProduct(this.idToDelete).subscribe(data=>{
      this.products=JSON.parse(JSON.stringify(data));
      console.log(this.products);
    });

  alert("Product deleted");
  location.reload();
  this.router.navigate(['/']);
  }
       
  
  

  ngOnInit(): void {

    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data))
      // console.log(this.products);
      
    })
  }
   
  

}
