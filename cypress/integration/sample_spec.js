describe('My first test', function () {
  it('renders without errors', function () {
    // Arrange - setup initial app state
    // - visit a web page
    cy.visit('http://localhost:8080')
    // - query for an element
    cy.contains('Template')
    // Act -take an action
    // - interact with that element
    // Assert - Make an assertion
    // - make an assertion about page content
  })
})
