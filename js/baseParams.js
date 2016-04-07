/**
 * Created by Lu on 3/16/16.
 */
function baseParams(v, dist) {
    var bpGlobal = this;
    // Get udid
    this.udid = function() {
        var uuid = Cookies.get('udid');
        if (typeof uuid === 'undefined') {
            //var tmpUUID = this.UUID(16, 2);
            var tmpUUID = function(){
                var len = 32;
                var $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-';
                var maxPos = $chars.length;
                var pwd = '';
                for (i = 0; i < len; i++) {
                    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
                }
                return pwd;
            }();
            Cookies.set('udid', tmpUUID);
            return tmpUUID;
        }
        return uuid;
    }();

    // Get Platform
    this.platform = function() {
        return navigator.platform;
    }();

    // Get Dosv
    this.dosv = function() {
        return navigator.userAgent;
    }();

    // Get token
    this.token = function() {
        var token = Cookies.get('token');
        if (typeof token === 'undefined') {
            return '';
        }
        return token;
    }();

    // Get language
    this.language = function() {
        return navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || 'en';
    }();

    // Get Position
    this.lat = function() {
        return 0.0;
    }();
    this.lng = function() {
        return 0.0;
    }();

    // Get network
    this.network = function() {
        return 'mobile';
    }();

    // Get Screen height
    this.sheight = function() {
        return document.documentElement.clientHeight;
    }();
    this.swidth = function() {
        return document.documentElement.clientWidth;
    }();

    // Get version
    this.v = function() {
        return v;
    };

    // GET dict
    this.dist = function() {
        return dist;
    };
    this.all = function() {
        return {
            'udid':bpGlobal.udid,
            'platform':bpGlobal.platform,
            'dosv':bpGlobal.dosv,
            'token':bpGlobal.token,
            'language':bpGlobal.language,
            'lat':bpGlobal.lat,
            'lng':bpGlobal.lng,
            'network':bpGlobal.network,
            'sheight':bpGlobal.sheight,
            'swidth':bpGlobal.swidth,
            'v':v,
            'dist':dist
        };
    }();
}
