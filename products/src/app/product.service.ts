import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get("http://localhost:3000/products")
  }
  newProduct(item)
  {
    return this.http.post<any>("http://localhost:3000/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  itemId;
  // editedProduct(itemid)
  // {
  //   this.itemId= itemid;
  //   return this.http.get("http://localhost:3000/edit/"+this.itemId);
  // }
  editSubmit(item)
  {
    return this.http.post<any>("http://localhost:3000/update",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  itemIdDel
  deletedProduct(item)
  {
    this.itemIdDel=item;
    return this.http.get("http://localhost:3000/delete/"+this.itemIdDel)
   
  }
  signupNew(user)
  {
    return this.http.post<any>("http://localhost:3000/signup",{"product":user})
    
    
  }
  loginUserNew(user)
  {
    return this.http.post<any>("http://localhost:3000/login",{"product":user})
    
  }
  loggedIn()
  {
    return !!localStorage.getItem('token');
  }
}
