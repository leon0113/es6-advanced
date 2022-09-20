class Suppot {
    name;
    role = 'Support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}

const aamir = new Suppot('Amir khan', 'India');
const salman = new Suppot('Salman', 'BD');
aamir.startSession();
salman.startSession();
// console.log(aamir, salman);