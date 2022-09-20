class TeamMember {
    name;
    role = 'Support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Suppot extends TeamMember {
    groupSupportTime;
    constructor(name, adress, time) {
        super(name, adress);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}

class StudentCare extends TeamMember {

    buildARoutine(student) {
        console.log(this.name, 'build a routine for', student);
    }
}

class NeptuneApp extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const aamir = new Suppot('Amir khan', 'India', 12);
const salman = new Suppot('Salman', 'BD', 10);
// aamir.startSession();
// salman.startSession();
console.log(aamir, salman);


const alia = new StudentCare('Alia Bhatt', 'Mumbai', 5);
console.log(alia);

const ash = new NeptuneApp('Ash', 'Delhi', 'Android studio');
ash.releaseApp('1.2.4');
console.log(ash);