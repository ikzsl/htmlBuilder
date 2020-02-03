/* let user = {
  firstName: 'Вася',
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  }
}; */

// Потеря «this»
// setTimeout(user.sayHi, 1000);
//-------------------------------------------------------

// Решение 1: сделать функцию-обёртку
/* setTimeout(function () {
  user.sayHi();
}, 1000);

setTimeout(() => user.sayHi(), 1000) */


// Решение 2: привязать контекст с помощью bind
/* let user = {
  firstName: 'Vasja',
};

function func(phrase) {
  console.log(phrase + ', ' + this.firstName);
}

let funcUser = func.bind(user);
func('hi');
funcUser('hi'); */

// ----------------------------------------------------
/* let user = {
  firstName: 'Vasja',
  sayHi(phrase) {
        console.log(`${phrase}, ${this.firstName}!`);
      }
};

let sayHi = user.sayHi.bind(user);

sayHi('qqq');
setTimeout(sayHi, 1000); */
//-----------------------------------------------------

/* let user = {
  firstName: 'Vasja',
  say(phrase) {
        console.log(`${phrase}, ${this.firstName}!`);
      }
};

let say = user.say.bind(user);
say('qqq');
say('kjkj') */


// Частичное применение
/* function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 10);

console.log(double(2)) */

// Частичное применение без контекста

/* function partial(func, ...argsBound) {
  return function(...args) {
    return func.call(this, ...argsBound, ...args);
  }
}

let user = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow('hello') */

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk, user.loginFail);