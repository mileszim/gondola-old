'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Post = function () {
  function Post(rawPost) {
    _classCallCheck(this, Post);

    if (!this.isPrototypeOf(Post)) {
      throw new Error('Post: Must be implemented by subclass!');
    }
    this._rawPost = rawPost;
    this._isFormatted = false;
    this._formattedPost = {};
  }

  _createClass(Post, [{
    key: 'isFormatted',
    value: function isFormatted() {
      return this._isFormatted;
    }
  }, {
    key: 'formattedPost',
    value: function formattedPost() {
      return this._formattedPost;
    }
  }, {
    key: 'toObject',
    value: function toObject() {
      if (this.isFormatted()) {
        return this.formattedPost();
      } else {
        this._formattedPost = this.buildScaffold(); // 1 - Make the basic post object
        this._formattedPost.author = this.parseAuthor(); // 2 - Add post author
        this._formattedPost.mentions = this.parseMentions(); // 3 - Add account mentions
        this._formattedPost.keywords = this.parseKeywords(); // 4 - Add keywords
        this._formattedPost.urls = this.parseURLs(); // 5 - Add URLs
        this._formattedPost.photos = this.parsePhotos(); // 6 - Add photos if they exist
        this._formattedPost.source = this.parseSource(); // 7 - Add source
        this._formattedPost.text = this.parseText(); // 8 - Add text
        this._isFormatted = true; // 9 - Set formatted post to true
        return this.formattedPost();
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return JSON.stringify(this.formattedPost());
    }
  }, {
    key: 'attach',
    value: function attach(key, value) {
      if (this.isFormatted() && key && value && !this._formattedPost[key]) {
        this._formattedPost[key] = value;
      }
    }
  }, {
    key: 'text',
    value: function text() {
      if (this.isFormatted()) {
        return this._formattedPost.text;
      }
      return null;
    }
  }, {
    key: 'buildScaffold',


    // Format Post
    value: function buildScaffold() {
      throw new Error('Post: Must be implemented by subclass!');
    }
  }, {
    key: 'parseAuthor',
    value: function parseAuthor() {
      throw new Error('Post: Must be implemented by subclass!');
    }
  }, {
    key: 'parseMentions',
    value: function parseMentions() {
      throw new Error('Post: Must be implemented by subclass!');
    }
  }, {
    key: 'parseKeywords',
    value: function parseKeywords() {
      throw new Error('Post: Must be implemented by subclass!');
    }
  }, {
    key: 'parseURLs',
    value: function parseURLs() {
      throw new Error('Post: Must be implemented by subclass!');
    }
  }, {
    key: 'parsePhotos',
    value: function parsePhotos() {
      throw new Error('Post: Must be implemented by subclass!');
    }
  }, {
    key: 'parseSource',
    value: function parseSource() {
      throw new Error('Post: Must be implemented by subclass!');
    }
  }, {
    key: 'rawPost',
    get: function get() {
      return this._rawPost;
    }
  }]);

  return Post;
}();