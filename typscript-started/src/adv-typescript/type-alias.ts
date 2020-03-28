type Alias = { num: number };
interface Interface {
  num: number;
}

declare function aliased(alias: Alias): Alias;
declare function interfaced(interface: Interface): Interface;

type Container<T> = { value: T };

/** Type alias refers to itself */
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
};

/** Type alias with the intersection types */
type LinkedList<T> = T & { next: LinkedList<T> };
interface Person {
  name: string;
}

let person: LinkedList<Person>;
// person.name;
// person.next.name;
// person.next.next.name;
// person.next.next.next.name;

export {};