//Functions

function getRandom(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPresent(array, num){
  return array.indexOf(num) != -1;
}

function isValidNumber(number,min,max){
  return !isNaN(number) && number >= min && number <= max;
}

function start(){
  var level;
  var level_check = true;
  var max_range;
  var user_num_array = [];
  var num_array = [];
  var max_pc_numbers = 16;
  var score = 0;
  
  //Execution
  do{

    var level_check = false;
    level = prompt("Inserisci un livello di difficoltà : 0 - 1 - 2");

    switch(level){
      case "0":
          max_range = 100;
          break;

      case "1":
          max_range = 80;
          break;

      case "2":
          max_range = 50;
          break;

      default:
          level_check = true;
          alert("Il livello inserito non è disponibile, riprova!");
          break;
    }
  }while(level_check);

  console.log("Difficoltà inserita : " + level);
  console.log("Genero " + max_pc_numbers + " numeri computer");

  var random_count = 0;

  while(random_count < 16){
    var rand_num = getRandom(1,max_range);
    if(!isPresent(num_array,rand_num)){
      num_array.push(rand_num);
      random_count++;
    }
  }

  console.log("Numeri del computer : \n" + num_array);

  console.log("Inizio input utente");

  var continue_game = true;
  var user_message;

  while(continue_game){

    var n = prompt("Inserisci un numero compreso tra 1 e " + max_range);
    var input = parseInt(n);
    
    if(!isValidNumber(input,1,max_range)){
      alert("L'input inserito non è corretto, riprova!");
      continue;
    }

    if(isPresent(user_num_array,input)){
      alert("Hai già inserito questo numero, riprova!");
      continue;
    }
    user_num_array.push(input);

    if(isPresent(num_array,input)){
      user_message = "Hai inserito un numero scelto dal computer! HAI PERSO! Punteggio " + score;
      continue_game = false;
      break;
    }

    console.log("Complimenti! + 1 punto");
    score++;

    if(user_num_array.length == (max_range - max_pc_numbers)){
      user_message = "Hai Vinto! Bravo! Punteggio " + score;
      continue_game = false;
    }

    console.log("Numeri dell'utente : \n" + user_num_array);
  }

  alert(user_message);
}

start();