import { Property, Token, CombinedToken } from "./mini-css.interfaces";

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
        name: z[0].trim(),
        value: z[1]
          .split(",")
          .map(a => a.trim())
          .join(", ")
          .trim()
      };
    });
}

export function filterCominedToken(
  currentToken: Token,
  a: number,
  max: number,
  tokens: Token[],
  result: Array<Token | CombinedToken>
): Property[] {
  return currentToken.props.filter(currentProp => {
    let notExist = true;

    for (let b = a + 1; b < max; b++) {
      const innerToken = tokens[b];

      innerToken.props = innerToken.props.filter(innerProp => {
        if (
          innerProp.name === currentProp.name &&
          innerProp.value === currentProp.value
        ) {
          notExist = false;
          result.push({
            selectors: [currentToken.selector, innerToken.selector],
            props: [
              {
                name: innerProp.name,
                value: innerProp.value
              }
            ]
          });
          return false;
        }
        return true;
      });
    }
    return notExist;
  });
}

export function isMatch(arr1: string[], arr2: string[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const checkerSet = new Set([...arr1, ...arr2]);
  return checkerSet.size === arr1.length;
}
