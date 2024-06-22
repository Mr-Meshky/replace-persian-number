"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sp = exports.persianToEnglish = exports.englishToPersian = void 0;
const englishToPersian = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
exports.englishToPersian = englishToPersian;
const persianToEnglish = (s) => s
    .toString()
    .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
exports.persianToEnglish = persianToEnglish;
const sp = (number) => {
    const seperatedNumber = number
        .toString()
        .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
    const joinedNumber = Array(seperatedNumber).join(",");
    return englishToPersian(joinedNumber);
};
exports.sp = sp;
