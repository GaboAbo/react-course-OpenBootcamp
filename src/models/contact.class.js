export class Contact {
    name = '';
    lName = '';
    email = '';
    connected = false;

    constructor(name, lName, email, connected) {
        this.name = name;
        this.lName = lName;
        this.email = email;
        this.connected = connected;
    }
}