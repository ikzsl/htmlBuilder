const hello = function() {
  console.log('Hello', this);
}



const q = {
  qwert: hello
};

q.qwert()