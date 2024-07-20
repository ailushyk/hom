// src/errors/UnauthorizedError.ts
export class UnauthorizedError extends Error {
  constructor(message: string = 'User not authorized') {
    super(message)
    this.name = 'UnauthorizedError'
  }
}
