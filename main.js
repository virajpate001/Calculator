let resultArea = document.querySelector("#resultArea");

function clearScreen(){
  resultArea.value = "";
}

function display(value){
  resultArea.value += value;
  }

function backspace(){
   let currentValue = document.querySelector("#resultArea").value;
   resultArea.value = currentValue. slice(0, -1);
}

function calculate(){
        

    try{
      var resultval= document.querySelector("#resultArea").value;
      var calvalue = eval(resultval);
      document.querySelector("#resultArea").value = calvalue;

    }
    catch (error){
         
         alert("Enter Valid value");
         document.querySelector("#resultArea").value = "";
    }
}