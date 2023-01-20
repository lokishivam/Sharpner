function combine(x, y, z){

    return this.age + x + y + z;
  
  }
  
  
  
  let stud = {
  
    age : 23
  
  }
  
  
  
  console.log(combine.call(stud, 3, 4, 5));
  
  console.log(combine.apply(stud, [4, 5, 6]));
  
  
  
  var bind = combine.bind(stud);
  
  console.log(bind(10, 20, 30));