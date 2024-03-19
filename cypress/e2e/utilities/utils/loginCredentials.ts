/* This code exports an object named `LoginCredentials` with three properties: `USER_TEST_EMAIL`,
`CYPRESS_USER_TEST_PASSWORD`, and `USER_TEST_WRONG_PASSWORD`. The values of the first two properties are
retrieved from environment variables using `Cypress.env()`, while the value of the third property is
hardcoded. This object can be imported and used in other parts of the codebase. */
export const loginCredentials = {
  CYPRESS_USER_TEST_EMAIL: Cypress.env('user_test_email'),
  CYPRESS_USER_TEST_PASSWORD: Cypress.env('user_test_password'),
  USER_TEST_WRONG_PASSWORD: 'Test1234$.',
};
