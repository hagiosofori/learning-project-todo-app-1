"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    verbose: true,
    // transform: {
    //   '^+\\.tsx?$': 'ts-jest'
    // },
    preset: 'ts-jest',
    modulePathIgnorePatterns: ["dist"]
};
exports.default = config;
