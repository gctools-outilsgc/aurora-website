// This mocks the Link object so we can test components that use it
const gatsby = jest.requireActual("gatsby");

module.exports = { ...gatsby, graphql: jest.fn(), Link: "Link" };