class Animal {
  constructor(name) {
    this.name = name;
  }
  comer() {
    console.log(this.name + ' comendo');
  }
  static morrer() {
    console.log('morreu');
  }
}

class Cachorro extends Animal {
  constructor(name) {
    super(name);
  }
  latir() {
    console.log(this.name + ' latindo');
  }
}

const tito = new Cachorro('tito');
const nina = new Animal('nina');
