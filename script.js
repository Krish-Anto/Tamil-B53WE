// Get all the countries with a population of less than 2 lakhs using Filter function

//1st step : create a XHR object
var requestt = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
requestt.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
requestt.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
requestt.onload=function(){
    var resultt=JSON.parse(requestt.response);
     var don = resultt.filter((element) => {
        for(let key in element.currencies){
        if (element.currencies[key].code==="USD"){
        return element;
        }
    }
      
     });
     console.log(don);
    }
    
    

