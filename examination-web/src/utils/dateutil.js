export default {

    toDate: function (str, defaultDate) {
        if (str) {
            let date = new Date(str);
            if (date != 'Invalid Date') return date;
        }
        return defaultDate;
    },

    toString: function (date) {
        if (!date) return null;
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) month = '0' + month;
        if (day < 10) day = '0' + day;
        return year + '-' + month + '-' + day;
    },

    // 当前年度：第一天
    getFirstDayOfThisYear: function (date) {
        if (date == null) return null;
        return new Date(date.getFullYear(), 0, 1);
    },

    // 当前年度：最后一天
    getLastDayOfThisYear: function (date) {
        if (date == null) return null;
        return new Date(date.getFullYear(), 11, 31);
    },

    // 上年度：第一天
    getFirstDayOfLastYear: function (date) {
        if (date == null) return null;
        return new Date(date.getFullYear() - 1, 0, 1);
    },

    // 上年度：最后一天
    getLastDayOfLastYear: function (date) {
        if (date == null) return null;
        return new Date(date.getFullYear() - 1, 11, 31);
    },

    // 下一年：第一天
    getFirstDayOfNextYear: function (date) {
        if (date == null) return null;
        return new Date(date.getFullYear() + 1, 0, 1);
    },

    // 当前月份：第一天
    getFirstDayOfThisMonth: function (date) {
        if (date == null) return null;
        return new Date(date.getFullYear(), date.getMonth(), 1);
    },

    // 当前月份：最后一天
    getLastDayOfThisMonth: function (date) {
        if (date == null) return null;
        let d1 = this.getFirstDayOfNextMonth(date);
        let d2 = new Date(d1.getTime() - 1);
        return new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
    },

    // 上个月份：第一天
    getFirstDayOfLastMonth: function (date) {
        if (date == null) return null;
        let year = date.getFullYear();
        let month = date.getMonth();
        if (month > 0) month--;
        else {
            year--;
            month = 11;
        }
        return new Date(year, month, 1);
    },

    // 上个月份：最后一天
    getLastDayOfLastMonth: function (date) {
        if (date == null) return null;
        let d1 = new Date(date.getFullYear(), date.getMonth(), 1);
        let d2 = new Date(d1.getTime() - 1);
        return new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
    },

    // 下个月份：第一天
    getFirstDayOfNextMonth: function (date) {
        if (date == null) return null;
        let year = date.getFullYear();
        let month = date.getMonth();
        if (month < 11) month++;
        else {
            year += 1;
            month = 0;
        }
        return new Date(year, month, 1);
    },

    // 上季：第一天
    getFirstDayOfLastSeason: function (date) {
        if (date == null) return null;
        let year = date.getFullYear();
        let month = date.getMonth();
        if (0 <= month && month < 3) {
            year = year - 1;
            month = 9;
        }
        else if (3 <= month && month < 6) month = 0;
        else if (6 <= month && month < 9) month = 3;
        else if (9 <= month && month < 12) month = 6;
        return new Date(year, month, 1);
    },

    // 上季：最后一天
    getLastDayOfLastSeason: function (date) {
        if (date == null) return null;
        let year = date.getFullYear();
        let month = date.getMonth();
        if (0 <= month && month < 3) month = 0;
        else if (3 <= month && month < 6) month = 3;
        else if (6 <= month && month < 9) month = 6;
        else if (9 <= month && month < 12) month = 9;
        let d1 = new Date(year, month, 1);
        let d2 = new Date(d1.getTime() - 1);
        let d3 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
        return d3;
    },

    // 本季：第一天
    getFirstDayOfThisSeason: function (date) {
        if (!date) return null;
        let year = date.getFullYear();
        let month = date.getMonth();
        if (0 <= month && month < 3) month = 0;
        else if (3 <= month && month < 6) month = 3;
        else if (6 <= month && month < 9) month = 6;
        else if (9 <= month && month < 9) month = 9;
        return new Date(year, month, 1);
    },

    // 下季：第一天
    getFirstDayOfNextSeason: function (date) {
        if (!date) return null;
        let year = date.getFullYear();
        let month = date.getMonth();
        if (month >= 0 && month < 3) month = 3;
        else if (month >= 3 && month < 6) month = 6;
        else if (month >= 6 && month < 9) month = 9;
        else if (month >= 9 && month < 12) {
            month = 0;
            year++;
        }
        return new Date(year, month, 1);
    },

    // 本季：第一天（指定季度）
    getFirstDayBySeasonIndex: function (year, seasonIndex) {
        let month = 0;
        if (seasonIndex == 1) month = 0;
        else if (seasonIndex == 2) month = 3;
        else if (seasonIndex == 3) month = 6;
        else if (seasonIndex == 4) month = 9;
        return new Date(year, month, 1);
    },

    // 判断：本年-第一天
    isFirstDayOfThisYear: function (date) {
        if (!date) return false;
        let month = date.getMonth();
        let day = date.getDate();
        if (month != 0 || day != 1) return false;
        return true;
    },

    // 判断：本季-第一天
    isFirstDayOfThisSeason: function (date) {
        if (!date) return false;
        let month = date.getMonth();
        let day = date.getDate();
        if (month != 0 && month != 3 && month != 6 && month != 9) return false;
        if (day != 1) return false;
        return true;
    },

    // 判断：本月-第一天
    isFirstDayOfThisMonth: function (date) {
        if (!date) return false;
        let day = date.getDate();
        if (day != 1) return false;
        return true;
    },
}