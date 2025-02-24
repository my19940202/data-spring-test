/**
 * author: xibobo
 *  desc: dataspring interview code unit test
 */

const assert = require('assert');
const { MyGreeter } = require('./MyGreeter');

// 要测试的函数
const myGreeter = new MyGreeter();
let testCount = 0;
function runTest(description, testFunc) {
    try {
        testFunc();
        console.log(`✅ ${description}`);
        testCount++;
    } catch (error) {
        console.error(`❌ ${description}`);
        console.error(error);
    }
}

// 测试用例
function MyGreeterTest() {
    // 改进点1: 如果greeting不支持自定义日期，直接从系统获取时间，无法覆盖测试多种情况的测试
    runTest('常规case: 凌晨 05:00', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 05:00'), 'Good evening', 'greeting("2025-02-24 05:00") should equal Good evening'
        );
    })
    runTest('常规case: 早晨 09:00', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 09:00'), 'Good morning', 'greeting("2025-02-24 09:00") should equal Good morning'
        );
    })
    runTest('常规case: 下午 15:00', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 15:00'), 'Good afternoon', 'greeting("2025-02-24 15:00") should equal Good afternoon'
        );
    })
    runTest('常规case: 晚上 21:00', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 21:00'), 'Good evening', 'greeting("2025-02-24 21:00") should equal Good evening'
        );
    })

    // 改进点2: 测试边界情况(假定题目中的区间是左开右闭区间)
    // morning   [6am, 12am)
    // afternoon [12am, 6pm)
    // evening   [6pm, 6am)
    runTest('边界case: 早晨 06:00', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 06:00'), 'Good morning', 'greeting("2025-02-24 06:00") should equal Good morning'
        );
    })

    runTest('边界case: 中午 12:00', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 12:00'), 'Good afternoon', 'greeting("2025-02-24 12:00") should equal Good afternoon'
        );
    })

    runTest('边界case: 下午 18:00', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 18:00'), 'Good evening', 'greeting("2025-02-24 18:00") should equal Good evening'
        );
    })

    // 改进点3: 此处统计了所有的单测执行情况，优化格式
    console.log(`All MyGreeterTest ${testCount} tests passed!`);
}

// 运行测试
MyGreeterTest();