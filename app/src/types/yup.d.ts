import * as yup from "yup";

declare module 'yup' {
  interface StringSchema<TType, TContext, TDefault, TFlags> {
    isEmpty(appendStr: string): this;
  }
}