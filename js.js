    let rand = document.getElementById('button');
    rand.onclick = function go(){
        let start_num = document.getElementById('start_num').value;    
        let finish_num = document.getElementById('finish_num').value;
        let num = Math.random()*finish_num;
        num = num.toFixed(0);
        if(num < start_num){ return go()};
        rand.value = num;
        console.log(rand.value);
        document.getElementById('effect').innerHTML = 'Guess number';
        document.getElementById('choice').value = '';
        return rand.value;
    };

    let button = document.getElementById('button_inp');
    button.onclick = function check(){
        let choice = document.getElementById('choice').value;
        console.log(choice);
        console.log(rand.value);
        if (choice > rand.value){
            document.getElementById('effect').innerHTML = 'Less'
        } if (choice < rand.value){
            document.getElementById('effect').innerHTML = 'More'
        } if (choice == rand.value){
            document.getElementById('effect').innerHTML = 'You guessed!'
        }
    }

    