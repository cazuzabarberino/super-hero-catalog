import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      fontPrimary: string;
      fontSecondary: string;
      goodHero: string;
      badHero: string;
    };
  }
}
