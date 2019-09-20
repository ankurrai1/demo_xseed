// window.csv1 = [];
var counts = [];
var ct = [];

const showError = function () {
    if (this.status != 200) {
        let message = `${this.responseText} something went wrong with setup`;
        console.log(message);
        return;
    }
};

const createRequest = function (callback, url, reqBody = null, method = "GET") {
    let xhr = new XMLHttpRequest();
    xhr.onload = callback;
    xhr.open(method, url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(reqBody);
};

const createRequestFor = function (objectName, callback) {
    let baseUrl = "https://localhost:4040"
    let urlRequestedFor = baseUrl + objectName;
    createRequest(callback, urlRequestedFor);
};


// ===================================================================================================== page 2

// const updateDroids = function(){
//     // createRequest(generateAndFill,"/all");
// }


const getTrTd = function (list, tableBody) {
    for (var i = 0; i < list.length; i++) {
        var tr = document.createElement('TR');
        tr.innerHTML = `<td><h4 class="text-center center">${list[i][0]}</h4></td>`
        tableBody.appendChild(tr);
    }
}
const generateAndFill = function (list) {
    let tableBodyC = document.getElementById("all_droid");
    // let csv2 = JSON.parse(window.localStorage.getItem('csv2'))
    getTrTd(list, tableBodyC)
    generateOnlyOne()
}

//==============================================================================================================================
st=0 , ag=0 , intell=0 , pf=0 ;
dst=0 , dag=0, dintell=0 , dpf=0 ;
fst=0 , fag=0 , fintell=0 , fpf=0 ;
temp=0
addmem = function (i) {
    winner=""
    a = document.getElementById("" + i).value
    let csv1 = JSON.parse(window.localStorage.getItem('csv1'))
    // console.log(csv1[i])
    st += Number(csv1[i][1]) * a
    ag += Number(csv1[i][3]) * a
    intell += Number(csv1[i][4]) * a
    pf = st + ag + intell
    console.log(st, ag, intell, pf)

    var z = document.getElementsByClassName("add-data")
    // console.log(z)
    temp = l
    // console.log("before if block", a, troopCount)
    if (troopCount >= a) {
        obj = {}
        obj["" + i] = a;
        counts.push(obj);
        troopCount -= a
        if (troopCount < 1) {
            for (let i = 0; i < z.length; i++) {
                z[i].classList.add("disabled")
            }
            let csv2 = JSON.parse(window.localStorage.getItem('csv2'))
            // console.log("++++",csv2)
            for (let j = 0; j < csv2.length-1; j++) {
                dst += Number(csv2[j][1]) 
                dag += Number(csv2[j][3]) 
                dintell += Number(csv2[j][4])
                console.log("Droid ",j, csv2[j])
            }
            dpf = dst + dag + dintell
            console.log("Droid pf",dpf)
            console.log("Troopres pf",pf)
            if (dpf>pf){
                // console.log("Under if")
                fst = dst, fag = dag, fintell = dintell, fpf = dpf,winner="Droid Army"
            }else{
                fst = st, fag = ag, fintell = intell, fpf = pf,winner="Troopers"
            }
    window.localStorage.setItem('result', JSON.stringify([fst,fag,fintell,fpf,winner,temp]));

        }
    } else {
        window.alert("Limit Exceed")
    }

}


const btsummary=function(res){
    let summary = []
    try {
        summary = JSON.parse(window.localStorage.getItem('summary'));
        if(summary == null || summary == undefined) summary = []
    } catch (error) {
        console.log(error.message);
    }
    finally{
        summary.push(res);
        console.log(summary)
        window.localStorage.setItem('summary', JSON.stringify(summary));
    }

}


const page3=function(){
    let result = JSON.parse(window.localStorage.getItem('result'))

    // console.log(winner,fag,fintell,fst,fpf,temp)
    document.getElementById("no-droids").innerHTML=`<strong>${result[5]}</strong>`
    document.getElementById("no-trooper").innerHTML=`<strong>${result[5]}</strong>`
    document.getElementById("battle-winner").innerHTML=`${result[4]}`
    document.getElementById("strength").innerHTML=`<strong>${result[0]}</strong>`
    document.getElementById("agility").innerHTML=`<strong>${result[1]}</strong>`
    document.getElementById("intelligence").innerHTML=`<strong>${result[2]}</strong>`
    document.getElementById("powerfactor").innerHTML=`<strong>${result[3]}</strong>`
    let dt=new Date()

    result.push(dt.toLocaleString())
    btsummary(result)
}


const startBattel = function () {
    window.localStorage.setItem('troops', JSON.stringify(counts));
    window.location.href = './page3.html'
    
}

var troopCount = 0
var l=0
const gennum = function () {
    let c2 = JSON.parse(window.localStorage.getItem('csv2'))
    let c1 = JSON.parse(window.localStorage.getItem('csv1'))
    if (c1.length > c2.length) {
        generateAndFill(c2)
        troopCount = c2.length - 1
        l=troopCount
    } else {
        generateAndFill(c2.splice(0, c1.length))
        troopCount = c1.length - 1
        l=troopCount
    }

}


const generateOnlyOne = function () {
    let csv1 = JSON.parse(window.localStorage.getItem('csv1'))
    let str = ""
    for (var i = 0; i < csv1.length - 1; i++) {
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


const showsummary = function () {
    let sum = JSON.parse(window.localStorage.getItem('summary'))
    let str = ""
    for (var i = 0; i < sum.length; i++) {
        let inHtml = `<tr>
        <td>${i+1}</td>
        <td>${sum[i][6]}</td>
        <td>${sum[i][4]}</td>
        <td>${sum[i][3]}</td>
        <td>${sum[i][5]}</td>
        <td>${sum[i][5]}</td>        
        </tr>`
        str += inHtml;
    }
    let tb = document.getElementById("datatable")
    tb.innerHTML = str;
}


