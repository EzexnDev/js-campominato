

function randomPcNumbers(max){
    var arr=[];
    var length = 16;
    console.log('qua ce vita');
    for (var i = 0 ; i<length ; i++){
        var num = Math.floor(Math.random()*(100-1) + 1)
        check(arr,num);
    }
    return arr;
}

function userNumbers(max,pcarray){
    var arr=[];
    var lengthUser = max- pcarray.length;
    for (var i = 0 ; i<lengthUser ; i++){
        console.log('entro')
        var num = prompt("Inserisci Numero");
        check(arr,num);
        for(var n=0; n<pcarray.length; n++){
            if(arr[i]==pcarray[n]){
                console.log("hai perso");
                return message="Hai perso"
            }
        }
    }
    console.log('Hai vinto!')
    return message="Hai Vinto"
}

function check(arr,num){
    if (arr.indexOf(num) === -1) {
        arr.push(num)
    };
}

function game(){
    
}


var pcArray = randomPcNumbers(100);
console.log(pcArray);
userNumbers(100,pcArray);


