/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class UserInfo {
  constructor() {}

  /**
  * Sets the email for the user.
  * @param {String} email The string representing the user's email.
  * @public
  */
  setEmail(email) {
    this.email = email;
  }

  /**
  * Sets the firstName for the user.
  * @param {String} firstName The string representing the user's firstName.
  * @public
  */
  setFirstName(firstName) {
    this.firstName = firstName;
  }

  /**
  * Sets the lastName for the user.
  * @param {String} lastName The string representing the user's lastName.
  * @public
  */
  setLastName(lastName) {
    this.lastName = lastName;
  }

  /**
  * Sets the locale for the user.
  * @param {String} locale The string representing the user's locale.
  * @public
  */
  setLocale(locale) {
    this.locale = locale;
  }

  /**
  * Sets the timezone for the user.
  * @param {String} timezone The string representing the user's timezone.
  * @public
  */
  setTimezone(timezone) {
    this.timezone = timezone;
  }

  /**
  * Sets the language for the user.
  * @param {String} language The string representing the user's language.
  * @public
  */
  setLanguage(language) {
    this.language = language;
  }

  /**
  * Sets the phoneNumber for the user.
  * @param {String} phoneNumber The string representing the user's phoneNumber.
  * @public
  */
  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
}
