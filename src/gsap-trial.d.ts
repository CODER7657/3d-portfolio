declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    paused(value?: boolean): boolean | this;
    scrollTop(value?: number): number | this;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    static refresh(force?: boolean): void;
  }
}
