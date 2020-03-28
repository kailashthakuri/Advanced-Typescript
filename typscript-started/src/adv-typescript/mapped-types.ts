type GenericReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type GenericNullable<T> = {
  [P in keyof T]: T[P] | null;
};

type GenericPartial<T> = {
  [P in keyof T]?: T[P];
};

type GenericPartialWithNewMember<T> = {
  [P in keyof T]: T[P];
} & { newMember: boolean };

type GenericPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type GenericRecord<K extends keyof any, T> = {
  [P in K]: T;
};

interface Person {
  name: string;
}
type ReadonlyPerson = GenericReadonly<Person>;
type NullablePerson = GenericNullable<Person>;
type PartialPerson = GenericPartial<Person>;
