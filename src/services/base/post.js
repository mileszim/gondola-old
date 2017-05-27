export default Post {
  constructor(rawPost) {
    if (!this.isPrototypeOf(Post)) {
      throw new Error('Post: Must be implemented by subclass!');
    }
    this._rawPost = rawPost;
    this._isFormatted = false;
    this._formattedPost = {};
  }

  isFormatted() {
    return this._isFormatted;
  }

  formattedPost() {
    return this._formattedPost;
  }

  toObject() {
    if (this.isFormatted()) {
      return this.formattedPost();
    } else {
      this._formattedPost = this.buildScaffold();          // 1 - Make the basic post object
      this._formattedPost.author = this.parseAuthor();     // 2 - Add post author
      this._formattedPost.mentions = this.parseMentions(); // 3 - Add account mentions
      this._formattedPost.keywords = this.parseKeywords(); // 4 - Add keywords
      this._formattedPost.urls = this.parseURLs();         // 5 - Add URLs
      this._formattedPost.photos = this.parsePhotos();     // 6 - Add photos if they exist
      this._formattedPost.source = this.parseSource();     // 7 - Add source
      this._formattedPost.text = this.parseText();         // 8 - Add text
      this._isFormatted = true;                            // 9 - Set formatted post to true
      return this.formattedPost();
    }
  }

  toJSON() {
    return JSON.stringify(this.formattedPost());
  }

  attach(key, value) {
    if (this.isFormatted() && key && value && !this._formattedPost[key]) {
      this._formattedPost[key] = value;
    }
  }

  text() {
    if (this.isFormatted()) {
      return this._formattedPost.text;
    }
    return null;
  }

  get rawPost() {
    return this._rawPost;
  }


  // Format Post
  buildScaffold() {
    throw new Error('Post: Must be implemented by subclass!');
  }

  parseAuthor() {
    throw new Error('Post: Must be implemented by subclass!');
  }

  parseMentions() {
    throw new Error('Post: Must be implemented by subclass!');
  }

  parseKeywords() {
    throw new Error('Post: Must be implemented by subclass!');
  }

  parseURLs() {
    throw new Error('Post: Must be implemented by subclass!');
  }

  parsePhotos() {
    throw new Error('Post: Must be implemented by subclass!');
  }

  parseSource() {
    throw new Error('Post: Must be implemented by subclass!');
  }
}
