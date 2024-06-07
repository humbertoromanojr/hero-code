class HttpException extends Error {
  constructor(public status: number, message: string) {
    super();

    this.status = status;
    this.message = message;
  }
}

export { HttpException };
