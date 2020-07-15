import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { EditModel } from '../edit-product/edit.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
// productItem:ProductModel;
productItem=new EditModel(null,null,null,null,null,null,null,null,null)
  constructor( private router:Router ,private route:ActivatedRoute,private productService:ProductService) { }
  urlId;
  urlData;
  title:String ="Edit Product";
  EditSubmit()
  {
   this.productService.editSubmit(this.productItem)
    console.log("called");
    alert("success");
    
    this.router.navigate([''])
    .then(() => {
      window.location.reload();
    });
    // location.reload();
    //edited above
  }


  ngOnInit(): void {
   
    this.route.paramMap.subscribe(data=>{
      this.urlId=data.get('id');
      console.log(this.urlId)
      this.urlData=JSON.parse(this.urlId)
      this.productItem._id=this.urlData.pid
      this.productItem.productId=this.urlData.proid
      this.productItem.productName=this.urlData.pname
      this.productItem.productCode=this.urlData.pcode
      this.productItem.releaseDate=this.urlData.pdate
      this.productItem.description=this.urlData.pdes
      this.productItem.price=this.urlData.price
      this.productItem.starRating=this.urlData.prat
      this.productItem.imageUrl=this.urlData.purl
      // this.productItem.p =this.urlData.pid
      // console.log(this.urlData.pid)
    });
      // this.productService.editedProduct(this.urlId).subscribe(data=>{
      //   this.productItem=JSON.parse(JSON.stringify(data))
      //   console.log(this.productItem)
      //   console.log("Data received")
      // })
    
   
  }

}
