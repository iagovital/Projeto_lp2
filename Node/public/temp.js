class conversao {
	constructor(Farenheit, Celsius, Kelvin) {
	  this.Farenheit = Farenheit;
	  this.Celsius = Celsius;
	  this.Kelvin = Kelvin;
	}
  }
  class enviar {
	constructor(url) {
	  this.url = url;
	}
	inserir(Farenheit, Celsius, Kelvin) {
	  return fetch(this.url, {
		method: "POST",
		body: JSON.stringify(Farenheit, Celsius, Kelvin),
		headers: {
		  "Content-Type": "application/json"
		}
	  }).then((resposta) => resposta.json());
	}
  }
  
  let Farenheit;
  let Celsius;
  let Kelvin;
  
  function convertTemp(direction) {
	//instanciando objetos
	var fObj = document.convert.ftemp,
	  cObj = document.convert.ctemp,
	  kObj = document.convert.ktemp;
  
	//definindo direções para conversões
	if (direction == "f") {
	  Farenheit = fObj.value;
	  cObj.value = Math.round(((fObj.value - 32) / 9) * 5);
	  Celsius = cObj.value;
	  console.log();
	  kObj.value = Math.round(parseFloat(cObj.value) + 273);
	  Kelvin = kObj.value;
	  let a = new conversao(Farenheit, Celsius, Kelvin);
	  console.log(Farenheit, Celsius, Kelvin);
	  let b = new enviar("https://4ceoi.sse.codesandbox.io/enviar");
	  b.inserir(a).then((resposta) => {
		console.log(resposta);
	  });
	} else if (direction == "k") {
	  Kelvin = kObj.value;
	  cObj.value = Math.round(kObj.value - 273);
	  Celsius = cObj.value;
	  fObj.value = Math.round(parseFloat(cObj.value) * (9 / 5) + 32);
	  Farenheit = fObj.value;
	  let a = new conversao(Farenheit, Celsius, Kelvin);
	  let b = new enviar("https://4ceoi.sse.codesandbox.io/enviar");
	  b.inserir(a).then((resposta) => {
		console.log(resposta);
	  });
	} else {
	  Celsius = cObj.value;
	  fObj.value = Math.round(parseFloat(cObj.value) * (9 / 5) + 32);
	  Farenheit = fObj.value;
	  kObj.value = Math.round(parseFloat(cObj.value) + 273);
	  Kelvin = kObj.value;
	  let a = new conversao(Farenheit, Celsius, Kelvin);
	  let b = new enviar("https://4ceoi.sse.codesandbox.io/enviar");
	  b.inserir(a).then((resposta) => {
		console.log(resposta);
	  });
	}
  }
  function clearAll() {
	document.convert.ftemp.value = "";
	document.convert.ctemp.value = "";
	document.convert.ktemp.value = "";
  }
  