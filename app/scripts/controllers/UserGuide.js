"use strict";

/**
 * Concrete class that implements the UserGuide.
 * @param elementID
 * @constructor
 */
var UserGuide = function (elementID) {
    Modal.call(this, elementID);
};

UserGuide.prototype = Object.create(Modal.prototype);
UserGuide.prototype.constructor = UserGuide;

UserGuide.prototype.setup = function(){
    console.log("UserGuide SETUP");
};

/**
 * Closes the modal overlay.
 * Overrides abstract class that removes events listeners.
 */
UserGuide.prototype.closeOverlay = function() {
    $(this.elementID + " a.close").off("click");
    $(this.elementID + " #game-close").off("click");
    $(this.elementID).off("keydown");
    // removes the "not again" event
    // @todo review possible refactoring by calling super (closeOverlay from parent)
    $(this.elementID + " #not-again").off("click");
    $.modal.close();
};

module.exports = UserGuide;