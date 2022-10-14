const express=require('express');

const App = express();


App.get('/',function(req,res){
    res.send('hello anil')
});
App.get('/home/hello',function(req,res){
    res.send('this is home')
});


App.listen(9001,()=>{
    console.log("");
})