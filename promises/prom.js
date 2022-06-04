let car = new Promise(function(resolve,reject){
    fuel_fulltank = false;
    if (fuel_fulltank)
       resolve()
    else 
        reject()  
});
car.then(function(){
    document.write("The fuel tank is full. Happy day driving :) .")
});
car.catch(function(){
    document.write("The fuel tank is empty :( .")
});