var csv1 = [];
var csv2 = [];

const showError = function(){
    if(this.status != 200){
        let message = `${this.responseText} something went wrong with setup`;
        console.log(message);
        return;
    }
};

const createRequest = function(callback, url, reqBody=null, method = "GET") {
    let xhr = new XMLHttpRequest();
    xhr.onload = callback;
    xhr.open(method, url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(reqBody);
};

const createRequestFor=function(objectName,callback){
    let baseUrl ="https://localhost:4040"
    let urlRequestedFor = baseUrl + objectName;
    createRequest(callback,urlRequestedFor);
};


// ===================================================================================================== page 2

const getTrTd = function(list,tableBody){
    for (var i=0; i<list.length; i++){
        var tr = document.createElement('TR');
        tr.classList.add("success");
        tr.innerHTML = `<td>${list[i].Kind}</td>`
        tableBody.appendChild(tr);

    }
}

const generateAndFill = function(){
    let troops = JSON.parse(this.responseText);
    let clone = []
    let droid = []
    for (let index = 0; index < troops.length; index++) {
        if (troops[index].Type == "clone trooper") 
            clone.push(troops[index])
        else
            droid.push(troops[index])
    }
    let tableBodyC = document.getElementById("clone_tropes");
    getTrTd(clone,tableBodyC)
    let tableBodyD = document.getElementById("droid_tropes");
    getTrTd(droid,tableBodyD)
}