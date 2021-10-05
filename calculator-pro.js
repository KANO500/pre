function calculatorPro() {
   
    let newNumber;
    let numberList = [];
   
    do {
     
      newNumber =prompt('Ingresa un numero o presiona cancelar para finalizar');
      
      if (isNaN(parseFloat(newNumber))&&newNumber!==null){
  
        console.log('No es un numero, introduzca otro valor');
    }
      else if(!isNaN(parseFloat(newNumber))){
      numberList.push(parseFloat(newNumber))
      console.log(numberList)}
      
    } while (newNumber !== null)

    let suma=0
    let resta=0
    let multi= 1
    let div=1
    
    for(let i=0;i<numberList.length;i++){
     let div= numberList[i]
     suma+=numberList[i]
     resta-=numberList[i]
     multi*=numberList[i]
     div/=numberList[i]
     
    }
    console.log("El resulrado de las sumas son:"+suma)
    console.log("El resulrado de las restas son:"+resta)
    console.log("El resulrado de las multiplicaciones son:"+multi)
    console.log("El resulrado de las divisiones son:"+div)

    let final = prompt("Desea seguir?, indique: y/n")

switch(final) {	
  case "y": 	
  calculatorPro()	
   break	
  case "n":	
  console.log("Bye")	
   break	
  default: 	
}	
    
  }
calculatorPro()
 

