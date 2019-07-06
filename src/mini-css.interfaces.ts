export interface Property {
  name: string;
  value: string;
}

export interface Token {
  selector: string;
  props: Array<Property>;
}
