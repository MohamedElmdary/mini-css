import { Property } from "./mini-css.interfaces";

export function getSelector(block: string, lParIndex: number): string {
  return block
    .slice(0, lParIndex)
    .trim()
    .replace(/\s+/gi, " ")
    .split(", ")
    .map(a => a.trim())
    .join(", ");
}

export function getProps(
  block: string,
  lParIndex: number,
  rParIndex: number
): Property[] {
  return block
    .slice(lParIndex + 1, rParIndex)
    .trim()
    .split(";")
    .filter(a => !!a)
    .map(item => {
      const z = item.split(":");
      return {
        name: z[0],
        value: z[1]
          .split(",")
          .map(a => a.trim())
          .join(", ")
      };
    });
}
