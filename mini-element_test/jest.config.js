module.exports = {
    testEnvironment: 'jsdom', // 默认JSdom
    roots: [                // 测试入口
        '<rootDir>/src',
        '<rootDir>/packages',
    ], // 
    transform: {            // 转换vue代码，es6等
        '^.+\\.vue$': 'vue-jest', // vue单文件
        '^.+\\js$': 'babel-jest' // esm最新语法 import
    },
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],

    // 指定测试文件位置。在 __test__文件夹中的格式为.spec.js的文件
    testMatch: ['**/__tests__/**/*.spec.js'],
    
    // 别名
    moduleNameMapper: {
        '^element-ui(.*)$': '<rootDir>$1',
        '^main(.*)$': '<rootDir>/src$1'
    }
}