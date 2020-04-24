function myLife (name) {
    alert(`Hello, my name ${name} and this is Sparta!`);

    function showSkills () {
        let skills = ['html', 'scc', 'js'];
        for (let i = 0; i < skills.length; i++) {
            console.log (skills [i]);
        }
    } 

    function cheackAge () {
        let age = confirm ("18 лет есть?");
        if (age == true){
           alert('Congratulation!');
        } else {
           alert('You should\n grow up!');
        }
    }

    function calcPow () {
        let num = prompt ('Enter a number to sqrt', '');
        console.log (Math.pow (num, 2));
    }

    showSkills ();
    cheackAge ();
    calcPow ();
} 
myLife ('John');
