import EventEmitter from 'events';

export default class Responder extends EventEmitter {
  constructor(...args) {
    super(...args);
    if (!this.isPrototypeOf(Responder)) {
      throw new Error('Post: Must be implemented by subclass!');
    }
  }

  /**
   * Process request params.
   * returns the response for the request
   */
  respond(request) {
    // Be sure to emit to the queue?
    throw new Error('ParentResponder: Must be implemented by subclass!');
  }
}
