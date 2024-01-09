function clearScreen(){
    document.getElementById("fresult").value = "";
}

function display(value){
    document.getElementById("fresult").value += value;
  }

function clearonebyone(){
    var inputElement= document.getElementById("fresult");
    let inputText = inputElement.value;
    let match = inputText.match(/\d$/);
    if (match) {
    let digitToRemove = match[0];
    inputText = inputText.slice(0, -1); 
  }
  inputElement.value = inputText;
}

function calculate(){
        

    try{
      var resultval= document.getElementById("fresult").value;
      var calvalue = eval(resultval);
      document.getElementById("fresult").value = calvalue;

    }
    catch (error){
         console.error("An error occurred:", error.message);
         alert("Enter Valid value");
         document.getElementById("fresult").value = "";
    }
}