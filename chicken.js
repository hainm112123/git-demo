var Chicken = function(name , weight) {
  this.name = name;
  this.weight = weight;
  this.alive = true;
}

Chicken.prototype.die = function() {
  this.alive = false;
}

module.exports;