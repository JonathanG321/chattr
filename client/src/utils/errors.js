export class NetworkError extends Error {
  constructor(serverErrors, message) {
    super(message);
    this.serverErrors = serverErrors;
  }
}
