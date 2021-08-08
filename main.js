const keywords = require('./keywords');
function generator() {
    'use strict';
    const prompt = require('prompt-sync')({sigint:true});
    console.log('██╗░░░██╗░██████╗███████╗██████╗░███╗░░██╗░█████╗░███╗░░░███╗███████╗░░░░░░░██████╗░███████╗███╗░░██╗███████╗██████╗░░█████╗░████████╗░█████╗░██████╗░');
    console.log('██║░░░██║██╔════╝██╔════╝██╔══██╗████╗░██║██╔══██╗████╗░████║██╔════╝░░░░░░██╔════╝░██╔════╝████╗░██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗');
    console.log('██║░░░██║╚█████╗░█████╗░░██████╔╝██╔██╗██║███████║██╔████╔██║█████╗░░█████╗██║░░██╗░█████╗░░██╔██╗██║█████╗░░██████╔╝███████║░░░██║░░░██║░░██║██████╔╝');
    console.log('██║░░░██║░╚═══██╗██╔══╝░░██╔══██╗██║╚████║██╔══██║██║╚██╔╝██║██╔══╝░░╚════╝██║░░╚██╗██╔══╝░░██║╚████║██╔══╝░░██╔══██╗██╔══██║░░░██║░░░██║░░██║██╔══██╗');
    console.log('╚██████╔╝██████╔╝███████╗██║░░██║██║░╚███║██║░░██║██║░╚═╝░██║███████╗░░░░░░╚██████╔╝███████╗██║░╚███║███████╗██║░░██║██║░░██║░░░██║░░░╚█████╔╝██║░░██');
    console.log('░╚═════╝░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝░░░░░░░╚═════╝░╚══════╝╚═╝░░╚══╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝');
    console.log('\n\n\nWelcome to my username-generator\nPlease answer all the questions for meaningful results...\n(Press Ctrl+C any time to exit.)');
    console.log('What is your gender? male/female/neutral(m/f/n)');
    // Takes in input.
    const genderInput = prompt('Gender: ');
    // Converts to lower-case.
    const gender = genderInput.toLowerCase();
    const frontOrBack = prompt('Do you want your input be added to the front ot back? f/b ');
    if(frontOrBack.toLowerCase() === 'b'){
        if(gender === 'n' || gender === 'neutral' || !gender){
     
        }
    } else {

    };
    const restartInput = prompt('DO YOU WANT TO START AGAIN? y/n: ');
    const restart = restartInput.toLowerCase();
    if (restart === 'y'|| restart === 'yes'){
        console.log('\n\n\n\n\n\n');
        generator();
    };
}
generator();