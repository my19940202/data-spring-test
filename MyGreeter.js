class MyGreeter {
    constructor() {
        const prefix = 'Good';
        // 按照六小时区分, 预期左闭右开区间
        this.message = [
            // 0AM-6AM凌晨, 返回 evening
            `${prefix} evening`,
            // 6AM到12AM,  返回 morning
            `${prefix} morning`,
            // 12AM到6PM,  返回 afternoon
            `${prefix} afternoon`,
            // 6PM到凌晨,   返回 evening
            `${prefix} evening`
        ]
    }
    greeting(defaultTime) {
        const hour = (defaultTime ? new Date(defaultTime) : new Date()).getHours();
        const msg = this.message[Math.floor(hour / 6)]
        return msg
    }
}

module.exports = {
    MyGreeter
}