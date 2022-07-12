function Cat(name, owner) {
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
    console.log(`${this.owner} loves ${this.name}`);
}

let calvin = new Cat("Calvin", "AppAcademy");

Cat.prototype.meow = function() {
    console.log(`${this.name} meows!`);
}