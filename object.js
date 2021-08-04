let person={
    name:"mani",
    age:34,
    isAlive:true,
    neww:{
        newName:"slev",
        age2:45
    },
    intrest:["videos watkching","learning codings","javascript"],
    add: function adding(){
        console.log(`I am ${this.name},  I like to ${this.intrest}, my age is ${this.age} `);
    }
};
console.log(person.add());