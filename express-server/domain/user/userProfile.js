"use strict";
var UserProfile = (function () {
    function UserProfile(id, displayName, image) {
        this.id = id;
        this.displayName = displayName;
        this.image = image;
    }
    return UserProfile;
}());
exports.UserProfile = UserProfile;
