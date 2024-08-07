let output=document.getElementById("output")
const clicked=(event)=>{
    console.log(event.target.value);
    
    output.value += event.target.value
} 
const calculate=()=>{
    let result=eval(output.value)
    output.value=result
}
