/* Your code here */
const myInput = document.querySelector('.inputBox input');
const toDolist = document.querySelector('.toDolist');
const inputBox = document.querySelector(".inputBox input");
const doneList = document.querySelector(".doneList")
const poom4 = document.querySelector(".poom4");
var tempLi
var arrtodolist = []
var arrdonelist = []
arrtodolist = JSON.parse(localStorage.getItem('toDoList'));
arrdonelist = JSON.parse(localStorage.getItem('doneList'));

if (arrtodolist === null) arrtodolist = [];
if (arrdonelist === null) arrdonelist = [];
loadToDoElement(event);
loadDoneList(event);
const clicked = () => {
    if (myInput.value == '') {
        alert("Task cannnot be empty");
    } else {
        arrtodolist.push(myInput.value);
        newElement(event);
        saveToStorage();
        // addToLocalStorage(myInput);
    }
}

function reset() {
    localStorage.clear();
    location.reload();
}

inputBox.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) clicked()
})

function saveToStorage() {
    localStorage.setItem("toDoList", JSON.stringify(arrtodolist));
    localStorage.setItem("doneList", JSON.stringify(arrdonelist));
}

function loadDoneList(event) {
    for (var i = 0; i < arrdonelist.length; ++i) {
        const tagLi = document.createElement('li');
        tagLi.classList.add("finished");
        tagLi.innerText = arrdonelist[i];
        doneList.insertBefore(tagLi, doneList.childNodes[0])
    }
}

function loadToDoElement(event) {
    for (var i = 0; i < arrtodolist.length; ++i) {
        const tagDiv = document.createElement('div');
        const tagLi = document.createElement('li');
        const btndiv = document.createElement('div');
        tagDiv.classList.add("pushokpai");
        tagDiv.innerText = arrtodolist[i]
        tagLi.classList.add("active");
        tagLi.appendChild(tagDiv);
        tagLi.appendChild(btndiv);
        myInput.value = '';
        toDolist.insertBefore(tagLi, toDolist.childNodes[0])
        const btn3 = document.createElement("button");
        const btn4 = document.createElement("button");
        // const btndiv = document.createElement('div');
        btn3.classList.add("poom3");
        btn4.classList.add("poom4");
        btn3.innerText = "Done";
        btn4.innerText = "Delete";
        btn3.style.visibility = "hidden";
        btn4.style.visibility = "hidden";
        // event.target.appendChild(btn3);
        // event.target.appendChild(btn4);
        btndiv.appendChild(btn3);
        btndiv.appendChild(btn4);
        tagLi.appendChild(btndiv);
        btndiv.classList.add("buttonbox");
        btn3.addEventListener('click', (event) => {
            tempLi = event.target.parentNode.parentNode.childNodes[0].innerText;
            arrdonelist.push(tempLi);
            addDonelist(tempLi);
            arrtodolist.splice(findIndexOf(arrtodolist, tempLi), 1)
            tagLi.remove();
            saveToStorage();
        })
        btn4.addEventListener('click', (event) => {
            tempLi = event.target.parentNode.parentNode.childNodes[0].innerText;
            arrtodolist.splice(findIndexOf(arrtodolist, tempLi), 1)
            tagLi.remove();
            saveToStorage();
        })
        tagLi.addEventListener('mouseenter', (event) => {
            btn3.style.visibility = "visible";
            btn4.style.visibility = "visible";

        })
        tagLi.addEventListener('mouseleave', (event) => {
            btn3.style.visibility = "hidden";
            btn4.style.visibility = "hidden";
        })
    }

}

function newElement(event) {
    const tagDiv = document.createElement('div');
        const tagLi = document.createElement('li');
        const btndiv = document.createElement('div');
        tagDiv.classList.add("pushokpai");
        tagDiv.innerText = myInput.value;
        tagLi.classList.add("active");
        tagLi.appendChild(tagDiv);
        tagLi.appendChild(btndiv);
        myInput.value = '';
        toDolist.insertBefore(tagLi, toDolist.childNodes[0])
        const btn3 = document.createElement("button");
        const btn4 = document.createElement("button");
        // const btndiv = document.createElement('div');
        btn3.classList.add("poom3");
        btn4.classList.add("poom4");
        btn3.innerText = "Done";
        btn4.innerText = "Delete";
        btn3.style.visibility = "hidden";
        btn4.style.visibility = "hidden";
        // event.target.appendChild(btn3);
        // event.target.appendChild(btn4);
        btndiv.appendChild(btn3);
        btndiv.appendChild(btn4);
        tagLi.appendChild(btndiv);
        btndiv.classList.add("buttonbox");
        btn3.addEventListener('click', (event) => {
            tempLi = event.target.parentNode.parentNode.childNodes[0].innerText;
            arrdonelist.push(tempLi);
            addDonelist(tempLi);
            arrtodolist.splice(findIndexOf(arrtodolist, tempLi), 1)
            tagLi.remove();
            saveToStorage();
        })
        btn4.addEventListener('click', (event) => {
            tempLi = event.target.parentNode.parentNode.childNodes[0].innerText;
            arrtodolist.splice(findIndexOf(arrtodolist, tempLi), 1)
            tagLi.remove();
            saveToStorage();
        })
        tagLi.addEventListener('mouseenter', (event) => {
            btn3.style.visibility = "visible";
            btn4.style.visibility = "visible";

        })
        tagLi.addEventListener('mouseleave', (event) => {
            btn3.style.visibility = "hidden";
            btn4.style.visibility = "hidden";
        })

}

function addDonelist(text) {
    const tagLi = document.createElement('li');
    tagLi.classList.add("finished");
    tagLi.innerText = text;
    doneList.insertBefore(tagLi, doneList.childNodes[0])
}

function findIndexOf(arr, data) {
    return arr.indexOf(data);
}