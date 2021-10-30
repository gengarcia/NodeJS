const path = require('path');
const fs = require('fs'); 

let chirpPath = path.join(__dirname, "../chirps/chirps.json");

let user = '@JuicyG';
let chirps = [
    {   
        author: user,
        chirp: 'RAIN RAIN GO AWAY'
    },
    {
        author: user,
        chirp: 'I dont think I like the cold anymore'
    },
    {
        author: user,
        chirp: 'I miss the sun'
    },
    {
        author: user,
        chirp: 'I forgot that dreary weather makes me feel blah...'
    },
    {
        author: user,
        chirp: 'SOS'
    }
];

fs.readFile(chirpPath, (err, data) => {
    if (err) console.log(`Error Error ERROR!!: ${err}`);

    let parseData = JSON.parse(data);

    chirps.forEach(chirp => {
        console.log(`${chirp.author} chirp: ${chirp.chirp}`);
    });
});