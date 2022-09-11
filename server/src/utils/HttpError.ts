export type MyError = {
  message: string
}

export const isError = (state: any | MyError): state is MyError => !!(state as MyError)?.message

export class HttpError extends Error {
  code: number

  constructor(code: number, public readonly message: string | any) {
    super(message)
    this.code = code
  }
}
