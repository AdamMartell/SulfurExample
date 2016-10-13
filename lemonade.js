"use strict";
function Person(days){
    this.probabilityToBuy = Math.random();
    this.buyLemonade = function(todaysHigh,price){
        var num = this.probabilityToBuy / price;
        var i=0;
        return true;
        if (todaysHigh > 75){
            var buy = todaysHigh%75 * num;
            } else {buy = num * 1;} 
        if (buy >= .5){
            return true;
        } else {return false;}
    }
}
function People(){
    this.peopleArray = [];
    this.addPeople = function(num){
        var people = num;
        for(var i=0; i<people; i++){
            var newPerson = new Person();
            this.peopleArray.push(newPerson);
        }
    //console.log(this.peopleArray);
    }
}
function Weather(){
    this.weatherArray = [];
    this.getWeather = function(days){
        for (var i=0; i <days; i++){
            var todaysHigh = document.weather.forecast[i].high;
            this.weatherArray.push(todaysHigh);
        }
    //console.log(this.weatherArray);
    }
}
/*function LemonadeStand (){    
    this.avgPeople = avgPeople;  
    this.price = price; 
    this.daysSimulate = daysSimulate;
    this.cost = cost; 
    this.people = new People();
    this.people.addPeople(this.avgPeople);
    this.temp = new Weather();
    this.temp.getWeather(this.daysSimulate);
}*/
function LemonadeStandGenerator(){  
    this.avgPeople = document.getElementById("avgPeople").value;  
    //this.price = document.getElementById("price").value; 
    //this.daysSimulate = document.getElementById("daysSimulate").value;
    //this.cost = document.getElementById("cost").value;
    this.people = new People();
    console.log(this.avgPeople);
    this.people.addPeople(this.avgPeople);
    this.temp = new Weather();
    this.temp.getWeather(this.daysSimulate);
    this.customersWhoBuyArray = [];
    this.findCustomersWhoBuy = function(){
console.log(this.people.peopleArray.length);
        for(var i=0; i<this.people.peopleArray.length; i++){
            var customers = this.people.peopleArray[i].buyLemonade(this.temp.weatherArray[i],this.price);
            if(customers === true){
            this.customersWhoBuyArray.push(customers);
            }
        }
    }
    this.createLemonadeStand = function(elementID){
        var element = document.getElementById(elementID);
        this.avgPeople = document.getElementById("avgPeople").value;  
        this.price = document.getElementById("price").value; 
        this.daysSimulate = document.getElementById("daysSimulate").value;
        this.cost = document.getElementById("cost").value;
        
        
        this.findCustomersWhoBuy();
        this.people.addPeople(avgPeople);
        //console.log(this.findCustomersWhoBuy.customersWhoBuyArray.length);
        var simulateTable = "<table><tr><th>" + "DAY" + "</th><th>" + "PEOPLE" + "</th><th>" + "GLASSES SOLD" + "</th><th>" + "PROFIT" + "</th></tr>";
        for (var i=0; i <this.daysSimulate; i++) {
            simulateTable += "<tr><td>" +  "Day " + (i+1) + "</td><td>" + this.avgPeople + "</td><td>" + this.customersWhoBuyArray.length + "</td><td>" + this.customersWhoBuyArray.length * this.cost + "</td></tr>";
        }
        simulateTable += "<tr><td>" + "<b>TOTAL: </b> Days " + this.daysSimulate + "</td><td>" + "People " + this.avgPeople*this.daysSimulate + "</td><td>" + "totalthis" + "</td><td>" + "totalthat" + "</td></tr></table>";
        element.innerHTML = simulateTable;
    }
}
var myTest2 = new LemonadeStandGenerator();