/**
 * author: xibobo
 *  desc: dataspring interview code test
 */

class MyGreeter {
    constructor() {
        const prefix = 'Good';
        // 按照六小时区分, 预期左闭右开区间
        this.message = [
            // 0AM-6AM凌晨
            `${prefix} evening`,
            // 6AM到12AM
            `${prefix} morning`,
            // 12AM到6PM
            `${prefix} afternoon`,
            // 6PM到凌晨 
            `${prefix} evening`
        ]
    }
    /**
     * 获取当前时间或根据指定的日期时间返回相应的问候信息。
     * @param {string} [defaultTime] - 可选，用于单元测试时mock日期的字符串，格式为'YYYY-MM-DD HH:MM'。如果不传，则默认获取当前时间。
     * @returns {string} 根据时间返回的问候信息。
     */
    greeting(defaultTime) {
        const hour = (defaultTime ? new Date(defaultTime) : new Date()).getHours();
        const msg = this.message[Math.floor(hour / 6)]
        return msg
    }
}

module.exports = {
    MyGreeter
}