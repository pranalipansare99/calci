function display(value){
    var display=document.querySelector(".displayarea");
      let node=document.createTextNode(value);
      display.appendChild(node);
    }
    
    function clearScreen(){
      let display=document.querySelector(".displayarea").innerHTML="";
    }
    
    function calculate() {
      var p= document.querySelector(".displayarea").innerText;
      var q = eval(p);
      console.log(q);
      document.querySelector(".displayarea").innerText = q;
    }
    
    
    
    
    
    