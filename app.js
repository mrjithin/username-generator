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
    console.log('What is your gender? male/female/neutral');
    // Takes in input.
    const genderInput = prompt('Gender: ');
    // Converts to lower-case.
    const gender = genderInput.toLowerCase();
}
generator();