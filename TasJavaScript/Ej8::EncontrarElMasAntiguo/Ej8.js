const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    function getTheOldest(people){
        var oldest= people.reduce((oldest,person)=> person.yearOfBirth < oldest.yearOfBirth ? person:oldest)
        console.log(oldest)
    }
    getTheOldest(people)