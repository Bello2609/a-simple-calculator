//get the history value
function getHistory(){
    return document.getElementById("history-value").innerText;
}
//print history value  
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
//get output
function getOutput(){
    return document.getElementById("output-value").innerText;
}
//print output
function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText = num;
    }
    else{
        document.getElementById("output-value").innerText =  getFormattedNumber(num);
    }  
}
function getFormattedNumber(num){
    if(this.id=="-"){
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}
//to reverse the getFormattedNumber
function reverseNumberFormat(num){
    return Number(num.replace(/,/g, ''));
}//operator session 
let operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click", function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){ //if output has a value
                output = output.substr(0,output.length-1);
                printOutput(output);
            } 
        }
            else{
                var output = getOutput();
                var history = getHistory();
                if(output==""&&history!=""){
                    if(isNaN(history[history.length-1])){
                        history = history.substr(0,history.length-1);
                    }

                }
                if(output!=""||history!=""){
                    //condition?true:false
                    output=output==""?output:reverseNumberFormat(output);
                    history = history+output;
                    if(this.id=="="){
                        var result = eval(history);
                        printOutput(result);
                        printHistory("");
                    }
                    else{
                        history = history + this.id;
                        printHistory(history);
                        printOutput("");

                    }
                }
            }  
    });
}
var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener("click", function(){
        //this will display the number clicked
        var output =  reverseNumberFormat(getOutput());
        if(output!=NaN){ //if output is a number
            output=output+this.id;
            printOutput(output);
        }
        
        

    });
}
