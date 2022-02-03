document.getElementById("results").onclick= function(){
    let min=document.getElementById("input1")
    let max=document.getElementById("input2")
    if(input1 === " " || input2 === " "){
        alert("either one or both fields are empty please fill them");
        return;
    }
    let a=min.value;
    a=parseInt(a);
    let b=max.value;
    b=parseInt(b);
    let rand=Math.floor(Math.random()*(b-a +1)+a);
    document.querySelector("#display").innerHTML= `Result is : ${Math.round(rand)}`
    console.log(Math.round(rand));
    

};