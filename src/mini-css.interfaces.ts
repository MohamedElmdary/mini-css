export interface Property {
  name: string;
  value: string;
}

export interface Token {
  selector: string;
  props: Array<Property>;
}

export interface CombinedToken {
  selectors: string[];
  props: Property[];
  remove?: boolean;
}
