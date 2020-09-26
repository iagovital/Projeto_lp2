const express = require("express");
const app = express();
app.use(express.json());


function f_c(a){
    let f_c = ((((a-32)/9)*5));
    return parseInt(f_c);
};

function c_f(a){
    let c_f = ((((a*9)+160)/5));
    return parseInt(c_f);
};

function c_k(a){
    let c_k = (a+273);
    return parseInt(c_k);
};

function k_c(a){
    let k_c = (a-273);
    return parseInt(k_c);
}


app.post("/f_c", (req,res)=>{
    let {temperatura} = req.body;
    const resultado = {
        Temperatura_fahrenheit: temperatura,
        Temperatura_Celsius: f_c(temperatura)
   }
   res.json(resultado);
});

app.post("/c_f", (req,res)=>{
    let {temperatura} = req.body;
    const resultado = {
       Temperatura_Celsius: temperatura,
       temperatura_Fahrenheit: c_f(temperatura)
   }
   res.json(resultado);
});

app.post("/k_c", (req,res)=>{
    let {temperatura} = req.body;
    const resultado = {
       Temperatura_Kelvin: temperatura,
       Temperatura_Celsius: k_c(temperatura)
   }
   res.json(resultado);
});

app.post("/c_k", (req,res)=>{
    let {temperatura} = req.body;
    const resultado = {
       Temperatura_Celsius: temperatura,
       Temperatura_Kelvin: c_k(temperatura)
   }
   res.json(resultado);
});

app.post("/k_f", (req,res)=>{
    let {temperatura} = req.body;
    let kc = k_c(temperatura);
    const resultado = {
       Temperatura_Kelvin: temperatura,
       Temperatura_fahrenheit: c_f(kc)
   }
   res.json(resultado);
});

app.post("/f_k", (req,res)=>{
    let {temperatura} = req.body;
    let fc = f_c(temperatura);
    const resultado = {
       temperatura_Fahrenheit: temperatura,
       Temperatura_Kelvin: c_k(fc)
   }
   res.json(resultado);
});




app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });