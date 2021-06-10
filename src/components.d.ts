/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Benchmark } from "./types";
export namespace Components {
    interface FfButton {
        "size"?: any;
        "type"?: any | 'primary' | 'secondary';
    }
    interface FfUpdatesForYou {
        "benchmarks": Benchmark[];
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLFfButtonElement extends Components.FfButton, HTMLStencilElement {
    }
    var HTMLFfButtonElement: {
        prototype: HTMLFfButtonElement;
        new (): HTMLFfButtonElement;
    };
    interface HTMLFfUpdatesForYouElement extends Components.FfUpdatesForYou, HTMLStencilElement {
    }
    var HTMLFfUpdatesForYouElement: {
        prototype: HTMLFfUpdatesForYouElement;
        new (): HTMLFfUpdatesForYouElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ff-button": HTMLFfButtonElement;
        "ff-updates-for-you": HTMLFfUpdatesForYouElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface FfButton {
        "size"?: any;
        "type"?: any | 'primary' | 'secondary';
    }
    interface FfUpdatesForYou {
        "benchmarks"?: Benchmark[];
        "onDetailBtnClick"?: (event: CustomEvent<any>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "ff-button": FfButton;
        "ff-updates-for-you": FfUpdatesForYou;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ff-button": LocalJSX.FfButton & JSXBase.HTMLAttributes<HTMLFfButtonElement>;
            "ff-updates-for-you": LocalJSX.FfUpdatesForYou & JSXBase.HTMLAttributes<HTMLFfUpdatesForYouElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
