const myName =()=>{
    return "Eboh osagie";
}
const span = document.createElement("span");
 span.style.color="blue";
 span.style.textShadow=" -2px 3px 5px blue";
 span.style.fontWeight="bold";
 span.style.fontSize="40px"

 span.innerText=myName ();
 document.body.append(span);