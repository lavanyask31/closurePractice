/*
output:
y 6
y  undefined
msg Closure call
*/

function makeFunc(y){
     console.log("y",y)
    const msg="Closure call";
    function displayMsg(y){
        console.log("y",y)
        console.log("msg",msg)
    }
    return displayMsg;
}
const myfunc=makeFunc("6");
myfunc();
