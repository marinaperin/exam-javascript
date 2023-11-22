// Exercise 6

const devTeam = {
  lead: {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"],
  },
  testers: [
    { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] },
  ],
  projectName: "WebApp",
};

// 1
/*
    In memoria ci sono 8 oggetti:
    - devTeam;
    - lead;
    - skills;
    - testers;
    - Bob;
    - skills annidato in Bob;
    - Charlie;
    - skills annidato in Charlie.
*/

// 2

const teamLead = devTeam.lead;
teamLead.skills += `, GraphQL`;

// 3

const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
devTeamCopy.projectName = "MobileApp";

// 4

const testerMaker = (name) => {
  let skills = [];
  const possibleSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Django",
    "PostgreSQL",
  ];

  for (let i = 0; i < 3; i++) {
    const n = Math.floor(Math.random() * 8);
    const skill = possibleSkills[n];
    skills.push(skill);
  }

  const tester = { name, skills };
  return tester;
};

const newTester = testerMaker("Sophia");
devTeamCopy.testers.push(newTester);

// 5

/*
    Oltre agli 8 oggetti originali, sono stati creati altri 10 oggetti:
    - la copia che contiene 8 oggetti, come l'oggetto originale;
    - con l'aggiunta dell'oggetto newTester, creato con la funzione 
      testerMaker, che contiene annidato un array (che è un oggetto) 
      di skills.

    In totale, abbiamo dunque 18 oggetti in memoria.
*/
