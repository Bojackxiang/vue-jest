module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)"],
  testPathIgnorePatterns: [
    '\.eslintrc\.js'
  ],
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,vue}"]
}
