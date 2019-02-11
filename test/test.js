import sortPerson from '../function';

test (`Сортировка по здоровью`, () => {
	const input = [
  {name: 'Мечник', health: 10},
  {name: 'Маг', health: 100},
  {name: 'Лучник', health: 80}
]
	const expected = [
  {name: 'Маг', health: 100},
  {name: 'Лучник', health: 80},
  {name: 'Мечник', health: 10}
]
	const received = sortPerson (input);
	
	expect(received).toEqual(expected);
})

test (`Сортировка по здоровью`, () => {
	const input = [
  {name: 'Мечник', health: 100},
  {name: 'Маг', health: 10},
  {name: 'Лучник', health: 80}
]
	const expected = [
  {name: 'Мечник', health: 100},
  {name: 'Лучник', health: 80},
  {name: 'Маг', health: 10}
]
	const received = sortPerson (input);
	
	expect(received).toEqual(expected);
})
