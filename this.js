// function Dog(breed, name, friends){
//   this.breed = breed;
//   this.name = name;
//   this.friends = friends;	
//   this.intro = function() {
//       console.log(`Hi, my name is ${this.name} and I’m a ${this.breed}`);
//       return this;
//   }; 
// }

// var chester = new Dog('beagle', 'Chester', ['Gracie', 'Josey', 'Barkley']);
// console.log("TCL: chester", chester);
// chester.intro()

var Friend = function (name, password, interests, job) {
  this.fullName = name;
  this.password = password;
  this.interests = interests;
  this.job = job;
};



function qqq() {
  
   function sayHello() {
    // раскомментируйте следующую строчку, чтобы узнать, на что указывает this
    // console.log(this); 
    console.log(this)
    return `Hi, my name is ${this.fullName} and I'm a ${this.job}. Let's be friends!`;
  }
}



var john = new Friend('John Smith', 'badpassword', ['hiking', 'biking', 'skiing'], 'teacher');
qqq()

// console.log(`${john.fullName}`);

// console.log(sayHello.call(john))



