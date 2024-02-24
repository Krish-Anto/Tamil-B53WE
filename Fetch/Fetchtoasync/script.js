async function get_Data(){
    var res = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
    var result = await res.json();
    console.log(result);
    for(i=0;i<result.length;i++){
        var name = result[i].name;
        var latlng = result[i].latlng;
        var capita = result[i].capital;
        open_Data(name,...latlng,capita);
    }
}
async function open_Data(name,lat,lon,capita){
 try{
    if (lat ==undefined){
        throw new Error ("Invalid lat lon Values") 
    }
    var wthr = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c6bdda3e44bd116ac39969a80db981cc`)
    var resu = await wthr.json();
 } catch{
    console.log("data lost"+error.message );
 }  
 
}
get_Data();



// var container = document.createElement("div");
// container.className = "container";

// var row = document.createElement("div");
// row.className = "row";

// function foo(data1){
// console.log(data1);

// for(var i=0;i<data1.length;i++){

//     var col = document.createElement("div")
//     col.className = "col-md-4";
//     col.innerHTML += 
//     `<div class="card" style="width: 18rem;">
//     <img class="card-img-top" src="${data1[i].flags.png}" alt="Card image cap">
//     <div class="card-body">
//      <b> <p class="card-text">Name : ${data1[i].name.common}</p> </b>
//      <b> <p class="card-text">Capital : ${data1[i].capital}</p> </b>
//     </div>
//   </div>`
//   row.append(col);
//   container.append(row);
//   document.body.append(container);



// }



// }