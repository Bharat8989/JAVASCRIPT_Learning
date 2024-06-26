document.getElementById('h1').innerHTML = "Decision Making in JavaScript";

        const username = prompt('Please enter your Name');
        const userAge = prompt("Please enter your Age");

        console.log(`Name: ${username}`);
        console.log(`Age: ${userAge}`);
        
        if(userAge >= 18 && userAge <= 24) {
            console.log("User is a college student.");
            document.write('User is a college student.');
            console.log("And he is learning computer science.");
        } else if (userAge >= 25 && userAge <= 45) {
            console.log("User is a working professional.");
            console.log("And he is a web developer.");
        }