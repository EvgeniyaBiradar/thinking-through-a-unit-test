const allProjectsList = ['Google', 'Hermes', 'Eataly', 'Galaxy', 'MTA', 'Salesforce'];

test('the projects list contains Google', () => {
  expect(allProjectsList).toContain('Google');
});
