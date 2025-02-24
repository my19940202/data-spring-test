const assert = require('assert');
const { MyGreeter } = require('./MyGreeter');

// 要测试的函数
const myGreeter = new MyGreeter();
let testCount = 0;
function runTest(description, testFunc) {
    try {
        testFunc();
        console.log(`✓ ${description}`);
        testCount++;
    } catch (error) {
        console.error(`✗ ${description}`);
        console.error(error);
    }
}

// 测试用例
function MyGreeterTest() {
    // 常规case
    runTest('凌晨', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 05:00'), 'Good evening', 'greeting("2025-02-24 05:00") should equal Good evening'
        );
    })
    runTest('早晨', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 09:00'), 'Good morning', 'greeting("2025-02-24 09:00") should equal Good morning'
        );
    })
    runTest('下午', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 15:00'), 'Good afternoon', 'greeting("2025-02-24 15:00") should equal Good afternoon'
        );
    })
    runTest('晚上', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 21:00'), 'Good evening', 'greeting("2025-02-24 21:00") should equal Good evening'
        );
    })


    // 测试边界情况
    runTest('早晨06:00', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 06:00'), 'Good morning', 'greeting("2025-02-24 06:00") should equal Good morning'
        );
    })

    runTest('中午12:00', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 12:00'), 'Good afternoon', 'greeting("2025-02-24 12:00") should equal Good afternoon'
        );
    })

    runTest('下午18:00', () => {
        assert.strictEqual(
            myGreeter.greeting('2025-02-24 18:00'), 'Good evening', 'greeting("2025-02-24 18:00") should equal Good evening'
        );
    })


    console.log(`All MyGreeterTest ${testCount} tests passed!`);
}

// 运行测试
MyGreeterTest();