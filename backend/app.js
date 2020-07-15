const express=require('express');
const app=new express();
const ProductData = require('./src/model/Productdata');
const UserData = require('./src/model/Signupdata');
const cors= require('cors');
var bodyParser=require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.get('/products',function(req,res){
         res.header("Access-Control-Allow-Origin","*")
         res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
         ProductData.find()
                        .then(function(products)
                        {
                            // console.log(products);
                            res.send(products);
                            
                        });         
                        // console.log("Its Products");                     
                                                                            });

app.post('/insert',function(req,res){
         res.header("Access-Control-Allow-Origin","*")
         res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
         console.log(req.body);
         var product={
              productId : req.body.product.productId, 
              productName : req.body.product.productName,
              productCode : req.body.product.productCode,
              releaseDate : req.body.product.releaseDate, 
              description : req.body.product.description, 
              price : req.body.product.price,
              starRating : req.body.product.starRating,
              imageUrl : req.body.product.imageUrl
                                                        }
    var product=new ProductData(product);
    product.save(); 
    
                                                               
         
});
// app.get('/edit/:id',function(req,res){
//     res.header("Access-Control-Allow-Origin","*")
//     res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
//     console.log("Hai saru");
//     var id=req.params.id;
//     console.log(id);
//     ProductData.findOne({_id:id})
//                         .then(function(products)
//                         {
//                             console.log(products);
//                             res.send(products);
//                         });         
                        


// });

app.post('/update',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    // console.log(req.body);
    var id=req.body.product._id;
    var productId = req.body.product.productId; 
    var productName = req.body.product.productName;
    var productCode = req.body.product.productCode;
    var releaseDate = req.body.product.releaseDate; 
    var description = req.body.product.description; 
    var price = req.body.product.price;
    var starRating = req.body.product.starRating;
    var imageUrl = req.body.product.imageUrl;
    ProductData.updateMany({_id:id},{$set:{productId:productId,productName:productName,productCode:productCode,releaseDate:releaseDate,description:description,price:price,starRating:starRating,imageUrl:imageUrl}},{multi:true})
                                   .then(()=>{
                                       res.send('success');
                                   })

});   

app.get('/delete/:id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    var id=req.params.id;
    console.log(id);
    console.log("To be deleted");
    ProductData.deleteOne({'_id':id})
    .then(()=>{
        res.send('Product Removed'); 
    });
});

app.post('/signup',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    // console.log(req.body);
    var emailid=req.body.product.email;
    var user={
        firstName : req.body.product.fname,
        LastName : req.body.product.lname,
        phoneNumber : req.body.product.phone,
        email : req.body.product.email,
        password : req.body.product.password
                                    }
        UserData.findOne({email:emailid},(err,data)=>{
            if(!data)
            {
                var userdata=new UserData(user);
                userdata.save();
                res.status(200).send({"sccess":"success"});
            }
            else{
                res.status(401).send({"error":"Account with this email already created"});
            }
        })
        
        

});

app.post('/login',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    // console.log(req.body);
    let userData=req.body;
    console.log(userData.product.email);
    UserData.findOne({email:userData.product.email},(err,user)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            if(!user)
            {
                res.status(401).send({"error":"Invalid email"});
            }
            else{
                if(user.password != userData.product.password)
                {
                    res.status(401).send({"error":"Invalid password"});
                }
                else{
                   
            res.status(200).send({"token":user._id});
                    // res.status(200).send(user);
                }
            }
        }
    })
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})