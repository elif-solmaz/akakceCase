module.exports = {
    testEnvironment: 'jest-environment-jsdom', // Jest 28'den önce varsayılan olarak bulunan jsdom
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // TypeScript dosyalarını ts-jest ile dönüştür
    },
    setupFilesAfterEnv: ['<rootDir>/app/setupTests.ts'],
    globals: {
        'ts-jest': {
            isolatedModules: true, // TypeScript dosyalarında modüller izole edilmiş olacak
        },
    },
};
