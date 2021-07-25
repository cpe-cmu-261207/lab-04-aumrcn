/* Your code here */
const myInput = document.querySelector('.inputBox input');
const toDolist = document.querySelector('.toDolist');
const inputBox = document.querySelector(".inputBox input");
const doneList = document.querySelector(".doneList")
const poom4 = document.querySelector(".poom4");
var tempLi
var arrtodolist = [];
var arrdonelist = [];


const clicked = () => {
    if(myInput.value == ''){
        alert("Task cannnot be empty");
    }else{
        arrtodolist.push(myInput.value);
        newElement(event)
        console.log(arrtodolist);
        console.log(arrdonelist);
        // addToLocalStorage(myInput);
    }
}

inputBox.addEventListener('keyup' , ( event ) =>{ 
    if(event.keyCode === 13) clicked()
})

// function addToLocalStorage(myInput){
//     for(var i = 0 ; i < )
//     localStorage.setItem("myInput" , JSON.stringify(myInput));
// }

// function retrieveLocalStorage(){

// }

var localdata = JSON.parse(localStorage.getItem("myInput"));

function newElement(event) {
    const tagDiv = document.createElement('div');
    const tagLi = document.createElement('li');
    tagDiv.classList.add("pushokpai");
    tagDiv.innerText = myInput.value;
    tagLi.classList.add("active");
    tagLi.appendChild(tagDiv);
    myInput.value='';
    toDolist.insertBefore(tagLi,toDolist.childNodes[0]);
    tagLi.addEventListener('mouseenter' , ( event ) =>{
        const btn3 = document.createElement("button");
        const btn4 = document.createElement("button");
        btn3.classList.add("poom3");
        btn4.classList.add("poom4");
        btn3.innerText = "Done";
        btn4.innerText = "Delete";
        event.target.appendChild(btn3);
        event.target.appendChild(btn4);
        btn3.addEventListener('click' , (event) =>{
            tempLi = event.target.parentNode.childNodes[0].innerText;
            console.log(event.target.parentNode.childNodes[0].innerText)
            arrdonelist.push(tempLi);
            addDonelist(tempLi);
            arrtodolist.splice(findIndexOf(arrtodolist,tempLi) , 1)
            tagLi.remove();
        })
        btn4.addEventListener('click' , (event) =>{
            tempLi = event.target.parentNode.childNodes[0].innerText;
            arrtodolist.splice(findIndexOf(arrtodolist,tempLi) , 1)
            console.log(arrtodolist);
            tagLi.remove();
        })
    })
    tagLi.addEventListener('mouseleave' , (event) =>{
        event.target.removeChild(event.target.childNodes[1]);
        event.target.removeChild(event.target.childNodes[1]);
    })
    
}

function addDonelist(text) {
    const tagLi = document.createElement('li');
    tagLi.classList.add("finished");
    tagLi.innerText = text;
    doneList.insertBefore(tagLi,doneList.childNodes[0])
    console.log(arrtodolist);
    console.log(arrdonelist);
}

function findIndexOf (arr , data){
    console.log(arr.indexOf(data));
    return arr.indexOf(data);
}