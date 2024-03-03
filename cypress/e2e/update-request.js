/// <reference types="cypress" />

describe("Update Request", () => {

    it("Update an existing post via the /posts via ", () => {
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/2",
            body: {
                // title: "Want to learn automation testing?2",
                title: "Where can I buy apple?",
                author: "Sukritan mahajan"
            }
        }).then(response => {
            expect(response.status).to.eql(200);
        })
    });

});