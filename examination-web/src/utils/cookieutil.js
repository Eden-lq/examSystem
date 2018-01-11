export default {

    set: function (key, value, expiredays) {
        if (expiredays == undefined) expiredays = 365;
        var date = new Date((new Date().getTime() + 24 * 3600 * 1000 * expiredays));
        var exp = "{key}={value};expires={expires}";
        exp = exp.replace("{key}", key);
        exp = exp.replace("{value}", escape(value));
        exp = exp.replace("{expires}", date.toGMTString());
        document.cookie = exp;
    },
    get: function (key) {
        if (document.cookie.length > 0) {
            let p1 = document.cookie.indexOf(key + "=");
            if (p1 != -1) {
                p1 = p1 + key.length + 1
                let p2 = document.cookie.indexOf(";", p1)
                if (p2 == -1) p2 = document.cookie.length;
                return unescape(document.cookie.substring(p1, p2))
            }
        }
        return ""
    },
    remove: function (key) {
        this.set(key, "null", 0);
    }
}