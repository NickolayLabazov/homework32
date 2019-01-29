const person = [
    {name: 'Мечник', health: 10},
    {name: 'Маг', health: 100},
    {name: 'Лучник', health: 80}
  ]
  
  import {sortPerson } from '../function.js'; 
  
  sortPerson(person);
  for (let i = 0; i < person.length; i++){
    document.write (`${person[i].name}: ${person[i].health}<br>`);
  }