export default {
    transform: {},
    moduleFileExtensions: ["js", "json", "ts", "tsx", "node"],
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.test.js"],
    extensionsToTreatAsEsm: [".js"], // Added this line to treat all JS files as ESM
};
