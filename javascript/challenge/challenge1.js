
//Step 1:
function ageInDays() {
    var birthYear = prompt('what were you born... good friend?');
    var ageInDayss = (2020 - birthYear) * 365;
    document.getElementById('demo').innerHTML = '<h1> you are ' + ageInDayss + ' in days</h1>';
}


function reset() {
    document.getElementById('demo').remove();

}



//Step 2;
// function ageInDays() {
//         var birthYear = prompt('when were you born... good friend?');
//         var ageInDayss = (2020 - birthYear) * 365;
//         var h1 = document.createElement('h1');
//         var textArea = document.createTextNode(' you are ' + ageInDayss + ' in days');
//         h1.setAttribute('id', 'ageInDays');
//         h1.appendChild(textArea);
//         document.getElementById('result').appendChild(h1);

//     }


//     function reset() {
//             document.getElementById('ageInDays').remove();
//         }
        




// Challenge 2
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('cat-gen');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image);
}












// challenge 3 Rock, Paper, scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(ranTorpsInt());
    console.log('computer', botChoice);
    results = decideWinner(humanChoice, botChoice);
     message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
    console.log(results);
    console.log(message)

}

function ranTorpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0},
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'you lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'you draw!', 'color': 'yellow'};
    } else { 
            return {'message': 'you won!', 'color':  'green'};
    } 
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='rock.png'" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px  rgba(37, 50, 233, 1);'>"
    
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>" 
    
    botDiv.innerHTML = "<img src='scissors.png'" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px  rgba(37, 50, 233, 1);'>"
   
    
    document.getElementById('flex-rps').appendChild(humanDiv);
    document.getElementById('flex-rps').appendChild(messageDiv);
    document.getElementById('flex-rps').appendChild(botDiv);
}


// challenge 4: Javascript challenge to change the color of all the buttons
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push[all_buttons[i]];
    
}

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        butt
    }
    
}








