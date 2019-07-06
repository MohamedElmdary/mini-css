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
  const b = block
    .slice(lParIndex + 1, rParIndex)
    .trim()
    .split(";")
    .filter(a => !!a)
    .map(item => {
      // fixed issue of background-image
      const firstColon = item.indexOf(":");
      const z = [item.slice(0, firstColon), item.slice(firstColon + 1)];
      return {
        name: z[0].trim(),
        value: z[1]
          .split(",")
          .map(a => a.trim())
          .join(", ")
          .trim()
      };
    });
  return b;
}

export function filterCominedToken(
  currentToken: Token,
  a: number,
  max: number,
  tokens: Token[],
  result: Array<Token | CombinedToken>
): Property[] {
  let combinedProp: CombinedToken | null;
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
          if (!combinedProp) {
            combinedProp = {
              selectors: [currentToken.selector, innerToken.selector],
              props: [
                {
                  name: innerProp.name,
                  value: innerProp.value
                }
              ]
            };
          } else {
            combinedProp.selectors = [
              ...combinedProp.selectors,
              innerToken.selector
            ];
          }
          return false;
        }
        return true;
      });
    }
    if (combinedProp) {
      if (combinedProp.props[0].name === "background-image") {
        // console.log(combinedProp);
      }
      result.push(combinedProp);
      combinedProp = null;
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

export function generatePropsCode(token: Token | CombinedToken): string {
  return token.props.map(prop => prop.name + ":" + prop.value).join(";");
}

export function logger(
  info: boolean,
  msg: string,
  color: string = "\x1b[36m%s\x1b[0m"
): void {
  if (info) {
    console.log(color, msg);
  }
}
