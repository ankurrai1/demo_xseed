// window.csv1 = [];
var counts = [];
var ct=[];

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
        tr.innerHTML = `<td><h4 class="text-center center">${list[i][0]}</h4></td>`
        tableBody.appendChild(tr);
    }
}
const generateAndFill = function(list){
    let tableBodyC = document.getElementById("all_droid");
    // let csv2 = JSON.parse(window.localStorage.getItem('csv2'))
    getTrTd(list , tableBodyC)
    generateOnlyOne()
}

//==============================================================================================================================
 st=0,ag=0,intell=0,pf=0
addmem=function(i){
       a = document.getElementById(""+i).value
    let csv1 = JSON.parse(window.localStorage.getItem('csv1'))
    // console.log(csv1[i])
    st+=Number(csv1[i][1])*a
    ag+=Number(csv1[i][3])*a
    intell+=Number(csv1[i][4])*a
    pf=st+ag+intell
    console.log(st,ag,intell,pf)

    var z=  document.getElementsByClassName("add-data")
    // console.log(z)

    if(troopCount>=a){
        obj = {}
        obj[""+i] = a;
        counts.push(obj);
        troopCount-=a
        if(troopCount<1){  
            for(let i=0;i<z.length;i++){
                z[i].classList.add("disabled")
            }
        }
    }
    else{
     window.alert("Limit Exceed")       
    }
    
}

const logic=function(){

}

const startBattel = function(){
    window.localStorage.setItem('troops', JSON.stringify(counts));
    window.location.href = './page3.html'
}

var troopCount=0
const gennum= function(){
    let c2 = JSON.parse(window.localStorage.getItem('csv2'))
    let c1=JSON.parse(window.localStorage.getItem('csv1'))
    if(c1.length>c2.length){
        generateAndFill(c2)
        troopCount=c2.length-1
    }
    else{
        generateAndFill(c2.splice(0,c1.length))
        troopCount=c1.length-1
    }
    
}


const generateOnlyOne = function(){
    let csv1 = JSON.parse(window.localStorage.getItem('csv1'))
    let str = "" 
    for (var i=0; i<csv1.length -1; i++){
        let inHtml = `<tr>
        <td>${csv1[i][0]}</td>
        <td>${csv1[i][1]}</td>
        <td>${csv1[i][3]}</td>
        <td class="text-center">${csv1[i][4]}</td>
        <td><center><input class="form-control col-md-3" type="text" value="0" id="${i}" /></center></td>
        <td class="text-center"><button class="btn btn-md btn-primary add-data" onclick="addmem(${i})"><i class="fa fa-plus" ></i> </button> </td>
        </tr>`
        str += inHtml;
    }
    let tb = document.getElementById("model_data_1")
    tb.innerHTML = str;
}

