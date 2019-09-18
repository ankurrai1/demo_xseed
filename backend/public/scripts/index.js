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
    let baseUrl ="https://localhost:4040/"
    let urlRequestedFor = baseUrl + objectName;
    createRequest(callback,urlRequestedFor);
};
