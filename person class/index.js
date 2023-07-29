class Person {
    constructor(name = 'Unknown', age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Instantiate an instance of the Person class with default values
  const person1 = new Person();
  console.log(person1.getDetails());
  
  // Instantiate another instance of the Person class with custom values
  const person2 = new Person('John Doe', 30);
  console.log(person2.getDetails());
  