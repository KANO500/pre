/* ● CALCULATOR PRO

Podrías hacer que la calculadora realizara operaciones preguntándole al usuario, a traves del prompt, los números e imprimiendo los datos en consola? Además, se deberá preguntar continuamente hasta que el usuario no quiera introducir más valores, y los cálculos se deben realizar con todos los números introducidos válidos. En caso que se introduzca un valor no válido se debería anunciar mediante un alert pero se debe dar la opción de seguir introduciendo valores.

function calculatorPro() {
  let newNumber;
  let numberList = [];

  do {
    newNumber = prompt('Enter a number or press cancel to stop');
    numberList.push(newNumber)
  } while (newNumber !== null)

  ...
}
Manteniendo los enunciados del primer calculator, como tener que filtrar los inputs que no sean números (no contemplado en el ejemplo).

Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra operación (puedes usar un confirm() para este paso), volviendo a pedir más números y realizando el cálculo.

calculator(n1,n2);
//Output =>
The result of the sum is resultSum
The result of the rest is resultRest
...
*/

/* prompt("New numbers? y/n")

Case "y" => calculatorPro()

  //Output => 
  The result of the sum is resultSum
  The result of the rest is resultRest
  ...
  
Case "n" => "Bye!"  */

/* 
// ---------------parte que itera
  function calculatorPro() {
   
    let newNumber;
    do {
      
      let numberList = [];
      newNumber = prompt('Enter a number or press cancel to stop');
      numberList.push(newNumber)
      console.log(numberList)
    } while (newNumber !== null)
  
   
  } */
//------------------hace todo menos dividir ---- se puede mejorar por el lado del NaN creo
  
function calculatorPro() {
   
    let newNumber;
    let numberList = [];
   
    do {
     
      newNumber =prompt('Enter a number or press cancel to stop');
      
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
    console.log("The result of the sum is:"+suma)
    console.log("The result of the rest is:"+resta)
    console.log("The result of the mult is:"+multi)
    console.log("The result of the div is:"+div)

    let final = prompt("New numbers? y/n")

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
 


 