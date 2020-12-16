function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

function woodCalculator(chair, table, bed){ 
    var totalWood = chair*1 + table*3 + bed*5
    return totalWood;
}

function brickCalculator(floorNo){
    var total=0;
    if(floorNo<0){
        console.log("Undefined");
    }
    else if(floorNo<=10){
        total = floorNo*15*1000;
    }
    else if(floorNo>10 && floorNo<=20){
        total = (floorNo-10)*12*1000+ 10*15*1000; 
    }
    else if(floorNo>20){
        total = (floorNo-20)*10*1000 + 10*15*1000 + 10*12*1000;
    }
    return total;
}

function tinyFriend(friendNames){
    var result = []
    var tiny = friendNames[0].length
    var count= 0;
    for(var i =1; i<friendNames.length; i++){
        if(friendNames[i].length < tiny){
            tiny = friendNames[i].length
        }
    }
    for(var i=0; i<friendNames.length; i++){
        if(friendNames[i].length==tiny){
            result[count] = friendNames[i]
            count++
        }
    }
    return result;
}

var res1 = feetToMile(599)
console.log("Mile: ",res1);

var res2 = woodCalculator(5,6,11)
console.log("We need total", res2, "woods");

var res3 = brickCalculator(25)
console.log("Total height is:", res3, "feet");

var friendNames = ['kanak','saif','daiyan','abs','bot','sajid']
var res4 = tinyFriend(friendNames)
console.log(res4);