type YesNoMaybe = 'yes' | 'no' | 'maybe';
type FavDrinks = Array<
  | 'vodka'
  | 'jager'
  | 'palinka'
  | 'gin-tonic'
  | 'aperol'
  | 'tequila'
  | 'beer'
  | 'whiskey'
  | 'wine'
  | 'rum'
  | 'dont-drink'
> | null;

export interface Person {
  id: number;
  name: string;
}

export interface Program {
  id: number;
  name: string;
  time: string;
  image: string;
}

export interface Event {
  title: string;
  date: Date;
  programs: Program[];
}

export interface Form {
  myName: string;
  email: string;
  beThere: YesNoMaybe | null;
  needsAccom: YesNoMaybe | null;
  favMusic: string;
  allergies: string[];
  otherAllergy: string;
  favDrinks: FavDrinks;
}
