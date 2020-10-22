class conversao {
	constructor(Farenheit, Celsius, Kelvin){
		this.Farenheit = Farenheit;
		this.Celsius = Celsius;
		this.Kelvin = Kelvin;
	}
}
class enviar {
	constructor(url){
		this.url =url;
	}
	inserir(Farenheit, Celsius, Kelvin){
		return fetch(this.url, {
			method: post,
			body: JSON.stringify({Farenheit, Celsius, Kelvin}),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(resposta => resposta.json())
	}
}

const Farenheit;
const Celsius;
const Kelvin;

function convertTemp(direction)
{
 //instanciando objetos
var fObj = document.convert.ftemp, cObj = document.convert.ctemp, kObj = document.convert.ktemp;

//definindo direções para conversões
if (direction == "f") 
{
	Farenheit = fObj;
	cObj.value = Math.round(((fObj.value -32)/9)*5);
	Celsius = cObj;
	kObj.value = Math.round((parseFloat(cObj.value) + 273));
	Kelvin = kObj;
	let a = new conversao(Farenheit, Celsius, Kelvin);
	let b = new enviar("https://localhost:3000/enviar");
	b.inserir(a).then(resposta=>{console.log(resposta)});

} 
else if (direction == "k") 
 {
	Kelvin = kObj;
	cObj.value = Math.round(kObj.value - 273);
	Celsius = cObj;
	fObj.value = Math.round((parseFloat(cObj.value) * (9/5) +32));
	Farenheit = fObj;
	let a = new conversao(Farenheit, Celsius, Kelvin);
	let b = new enviar("https://localhost:3000/enviar");
	b.inserir(a).then(resposta=>{console.log(resposta)});
 }
else
 {
	Celsius = cObj;
	fObj.value = Math.round((parseFloat(cObj.value) * (9/5)) + 32);
	Farenheit = fObj;
	kObj.value = Math.round((parseFloat(cObj.value) + 273));
	Kelvin = kObj;
	let a = new conversao(Farenheit, Celsius, Kelvin);
	let b = new enviar("https://localhost:3000/enviar");
	b.inserir(a).then(resposta=>{console.log(resposta)});
	}
}

function clearAll()
{
document.convert.ftemp.value="";
document.convert.ctemp.value="";
document.convert.ktemp.value="";
}