function anything(){
  this.gender = "female";
  return this.name = "Sahil";
}

console.log(anything());
obj = new anything();
obj2 = new anything();
console.log(obj.name);
obj.age = 21;
console.log(obj);
console.log(obj2);
anything.prototype.gender = "male";
console.log(anything.prototype);
console.log(obj2.gender);
