module.exports = {
  // o ambiente de testes será na dom
  // essa propriedade fará o jest simular o dom do browser
  testEnvironment: 'jsdom',
  // pastas que serão ignoradas pelo jest
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  // habilita o teste de cobertura
  collectCoverage: true,
  // onde o teste de cobertura será aplicado:
  collectCoverageFrom: ['src/**/*.ts(x)'],
  // configurações que serão carregadas antes do jest iniciar os testes
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
