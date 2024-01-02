// var container = document.createElement("div")
// container.className = "container";

// var row = document.createElement("div")
// row.className = "row";

// var col = document.createElement("div")
// col.className = "col";


// row.append(col);
// container.append(row);
// document.body.append(container);
function label_create(a,b,c,d){
    var res = document.createElement(a);
    res.setAttribute(b,c);
    res.innerHTML=d;
    return res;
}

function br_create(){
    var br1 = document.createElement("br");
    return br1;
}
 var br = br_create();

function input_create(a,b,c,d,e){
    var res1 = document.createElement(a);
    res1.setAttribute(b,c);
    res1.setAttribute(d,e);
    return res1;
}

var label= label_create("label","for","firstname","FirstName");
var input = input_create("input","type","firstname","id","firstname");
var br1=br_create();
var br2=br_create();
document.body.append(label,br1,input,br2);

var label= label_create("label","for","lastname","LastName");
var input = input_create("input","type","lastname","id","lastname");
var brr=br_create();
document.body.append(label,br,input,brr);

var label= label_create("label","for","email","Email");
var input = input_create("input","type","email","id","email");
var br3=br_create();
var br4=br_create();
document.body.append(label,br3,input,br4);







