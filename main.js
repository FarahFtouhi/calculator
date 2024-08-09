let output=document.getElementById("output")
const clicked=(event)=>{
    console.log(event.target.value);
    
    output.value += event.target.value
} 
const calculate=()=>{
    let result=eval(output.value)
    output.value=result
}
let reseting =function(event){
    if (event.target.value==="AC"){
        output.value=" "

    }
    else if(event.target.value==="DEL"){
        output.value=output.value.slice(0,output.value.length-1)

    }

}