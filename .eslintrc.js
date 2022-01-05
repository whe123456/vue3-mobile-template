module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:vue/vue3-essential'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        // 规则可以根据自己项目需求配置
        // 各个规则配置含义参考http://eslint.cn/docs/rules/
        'array-bracket-spacing': ['error', 'never'], // 数组紧贴括号部分不允许包含空格
        'object-curly-spacing': ['error', 'never'], // 对象紧贴花括号部分不允许包含空格
        'block-spacing': ['error', 'never'], // 单行代码块中紧贴括号部分不允许包含空格
        'no-multiple-empty-lines': 'error', // 不允许多个空行
    },
};
