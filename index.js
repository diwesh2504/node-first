const fs=require("fs");
const express=require('express');
const app=express();

app.get("/",function(req,res){
var path="D:\\python"


fs.readdir(path,function(err,data){
    let result1="<h1 style='color:red'>Folders:</h1><ul>";
    let result2="<h1 style='color:green'>Files:</h1><ul>"
    
    if(err) throw err
     for(let i in data){
        var stats=fs.statSync(path+"\\"+data[i])
        if(stats.isFile()){
            result2+=`<li style='font-style:oblique'>${data[i]} </li>`
        }else if(stats.isDirectory()){
            
            result1+=`<li style='font-style:italic'>${data[i]} </li>`

        }
        
     }
     result1+="</ul>"
     result2+="</ul>"
     res.send(result1+result2);
});
})

app.listen(3000,()=>{
    console.log("listening")
})
