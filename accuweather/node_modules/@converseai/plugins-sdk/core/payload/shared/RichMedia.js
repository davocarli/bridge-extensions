module.exports = class RichMedia {

  /**
  * Create a new RichMedia object.
  * @param {Object} obj The Javascript object to be passed through.
  * @param {String} mediaType an arbitray string defining the media.
  * @public
  */
  constructor(obj, mediaType) {
    this.type = mediaType;
    this.entity = obj;
  }

  /**
  * Sets the type that defines the type of media. E.g. 'BUTTON', 'CAROUSEL'.
  * @param {String} mediaType an arbitray string defining the media.
  * @public
  */
  setRichMediaType(mediaType) {
    this.type = mediaType;
  }

  /**
  * Sets the Rich Media object to be passed through to the channel.
  * @param {Object} obj The Javascript object to be passed through.
  * @public
  */
  setRichMediaObject(obj) {
    this.entity = obj;
  }
}
