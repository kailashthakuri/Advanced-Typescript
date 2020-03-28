/** Using  instaceof  type guard */

interface Padder {
  getStringPadding(value: string): string;
}

class StringPadder implements Padder {
  constructor(public padding: string) {}
  getStringPadding(value: string) {
    return this.padding + value;
  }
}

class SpaceRepeatingPadder implements Padder {
  constructor(private padding: number) {}
  getStringPadding(value: string) {
    return Array(this.padding).join(" ") + value;
  }
}

function getPadder(): Padder {
  return Math.random() > 0.5
    ? new StringPadder("   ")
    : new SpaceRepeatingPadder(5);
}

const padder = getPadder();
if (padder instanceof StringPadder) {
  console.log(padder.getStringPadding("kailash"));
}

if (padder instanceof SpaceRepeatingPadder) {
  console.log(padder.getStringPadding("Ashok"));
}
