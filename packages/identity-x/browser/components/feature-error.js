export default class FeatureError extends Error {
  constructor(message, code = 500) {
    super(message);
    this.name = 'FeatureError';
    this.code = code;
  }
}
