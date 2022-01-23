import { compare, hash } from 'bcrypt';

export class Comparator {
  constructor(saltOrRounds?: string|number) {
    this.saltOrRounds = (saltOrRounds ? saltOrRounds : 10);
    this.compare = this.compare.bind(this);
    this.hash = this.hash.bind(this);
  }
  saltOrRounds: string|number;
  compare(data: string, encrypted: string): Promise<boolean> {
    return compare(data, encrypted);
  }
  hash(data: string): Promise<string> {
    return hash(data, this.saltOrRounds);
  }
}
