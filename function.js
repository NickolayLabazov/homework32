export default function sortPerson(array) {
  function compare(a, b) { // Функция сортировки массива по убыванию
    return (b.health - a.health);
  }
  array.sort(compare); // Сортировка массива по убыванию
  return array;
}
