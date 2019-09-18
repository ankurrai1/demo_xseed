// window.csv1 = [];
// window.csv2 = [];

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

// const updateDroids = function(){
//     // createRequest(generateAndFill,"/all");
// }


const getTrTd = function(list,tableBody){
    for (var i=0; i<list.length; i++){
        var tr = document.createElement('TR');
        tr.innerHTML = `<td><center><h3>${list[i][0]}</center></h3></td>`
        tableBody.appendChild(tr);
    }
}
const generateAndFill = function(){
    let tableBodyC = document.getElementById("all_droid");
    let csv2 = JSON.parse(window.localStorage.getItem('csv2'))
    getTrTd(csv2 , tableBodyC)
}