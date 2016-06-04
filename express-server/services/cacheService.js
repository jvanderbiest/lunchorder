"use strict";
var NodeCache = require('node-cache');
var CacheService = (function () {
    function CacheService() {
        console.log("Cache init");
        this.myCache = new NodeCache();
    }
    CacheService.prototype.set = function (key, obj, ttl, cb) {
        this.myCache.set(key, obj, ttl, cb);
    };
    CacheService.prototype.get = function (key, callback) {
        this.myCache.get(key, callback);
    };
    return CacheService;
}());
exports.CacheService = CacheService;
//# sourceMappingURL=cacheService.js.map