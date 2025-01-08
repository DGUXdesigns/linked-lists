import { LinkedList } from './nodeLogic.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

list.prepend('cheetah');

console.table(list);
console.table(list.at(0));

console.log(list.toString());
console.log(list.getSize());

list.removeAt(6); // Should remove hamster

console.log(list.toString());
console.log(list.getSize());
