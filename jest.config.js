module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)"],
  testPathIgnorePatterns: [
    '\.eslintrc\.js'
  ],
  collectCoverage: true,
  // REVIEW src下面的所有的 js / vue的文件
  // ** 的意思是全部文件
  collectCoverageFrom: [
    "**/src/components/**/*.{js,vue}",
    '"**/src/pages/**/*.{js,vue}"'
  ],

}
