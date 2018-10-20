function add(a) {
    return a + 1;
  }
  
  
  var a = 1; 
  
  function add(a) {
    return a + 1;
    
  }
  
  add(1); 
  
  add('2');
  
  var promise = new Promise((resolve, reject) => resolve(5));
  promise.then(function boo(n) { n + 1}).then(data => console.log(data)); //undefined
  
  promise.then(data => data += 1).then(data => console.log(data)) //6
  
  var Foo = function(name) {
    this.name = name;
  }
  Foo.prototype.bar = "where is the soap";
  var insta = new Foo();
  
  // insta.bar = "here"
  
  delete insta.bar
  console.log(insta.bar) //where is the soap?
  
  //currying
  var answer = mul(2)(2)(3); //
  
  
  
  
  
  
  
  
  
  
  