function foo(res1){
    var final_data = res1["Tamil Nadu"].districtData["Airport Quarantine"].active;
    console.log(`The Active cases in Tamil Nadu Airport cases are ${final_data}`);
}


async function get_data(){
    var res = await fetch("https://data.covid19india.org/state_district_wise.json");
    var res1 = await res.json();
    console.log(res1);
    foo(res1);

}

get_data();

// c6bdda3e44bd116ac39969a80db981cc