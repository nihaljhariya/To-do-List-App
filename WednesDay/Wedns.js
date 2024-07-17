let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li")
    item.innerText=inp.value;


    let DelBtn=document.createElement("button");
    DelBtn.innerText="Delete";
    // DelBtn.classList.add("delete");
    item.appendChild(DelBtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
});


ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("Delete");
    }
});

// let DelBtns=document.querySelectorAll(".Delete");
// for(DelBtn of DelBtns){
//     DelBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//        console.log(par);
//        par.remove();
//     })
// } 