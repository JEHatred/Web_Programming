var person = {
    fistName: 'Javier',
    lastName: 'Mota',
    greet: function (){
        console.log(`Hello Mr. ${this.fistName} ${this.lastName}`);
    }
}

console.log(person.fistName);
console.log(person.lastName);
person.greet();

console.log(person['fistName']);
console.log(person['lastName']);
person['greet']();