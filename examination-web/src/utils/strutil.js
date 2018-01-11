export default {

    toFixedNumber: function (val, len, defaultReturn) {
        if (val != null && val != undefined) {
            val = String(val);
            var index = val.lastIndexOf(".");
            if (index >= 0) {
                var finalIndex = Math.min(index + len, val.length);
                val = val.substr(0, finalIndex);
                while (val.length > 0 && val.indexOf(".") >= 0 && (val.endsWith("0") || val.endsWith("."))) {
                    val = val.substr(0, val.length - 1);
                }
            }
            return String(val);
        }
        return defaultReturn;
    },

    toPercent: function (val, len, defaultReturn) {
        if (val) {
            val = String(val * 100);
            if (val.startsWith("16")) {
                debugger;
            }
            var index = val.lastIndexOf("\.");
            if (index >= 0) {
                var finalIndex = Math.min(index + len + 1, val.length);
                val = val.substr(0, finalIndex);
                while (val.length > 0 && val.indexOf(".") >= 0 && (val.endsWith("0") || val.endsWith("."))) {
                    val = val.substr(0, val.length - 1);
                }
            }
            return String(val) + "%";
        }
        return defaultReturn;
    },

    trimLeft: function (val, left) {
        while (val && val.startsWith(left)) {
            val = val.substring(left.length, val.length);
        }
        return val;
    },
    trimRight: function (val, right) {
        while (val && val.endsWith(right)) {
            val = val.substring(0, val.length - right.length);
        }
        return val;
    },

    trim: function (val, sub) {
        val = this.trimLeft(val, sub);
        val = this.trimRight(val, sub);
        return val;
    },
}