import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'data.json');

function writeToFile(fajlnev, tartalom) {
    try {
        fs.writeFileSync(fajlnev, JSON.stringify(tartalom, null, 2), 'utf-8');
    } catch (err) {
        console.log(err);
    }
}

function readFromFile(fajlnev) {
    try {
        const tartalom = fs.readFileSync(fajlnev, 'utf-8');
        return JSON.parse(tartalom);
    } catch (err) {
        console.log(err);
        return null;
    }
}


const felhasznalok = [
    { id: 1, name: 'Alan' },
    { id: 2, name: 'Bea' },
    { id: 3, name: 'Clotild' },
];
writeToFile(filePath, felhasznalok);

let aktualisAdatok = readFromFile(filePath);

if (aktualisAdatok) {
    const ujAdatok = [
        { id: 4, name: 'David' },
        { id: 5, name: 'Eve' },
        { id: 6, name: 'Frank' },
    ];
    aktualisAdatok = [...aktualisAdatok, ...ujAdatok];

    writeToFile(filePath, aktualisAdatok);

    const ujTartalom = readFromFile(filePath);
    console.log('A fájl új tartalma:', ujTartalom);
}
