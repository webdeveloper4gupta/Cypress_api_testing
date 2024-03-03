/// <reference types="cypress" />


describe("Get Request", () => {
    var result;
    it("Validate status code of the /posts api", () => {
        result = cy.request("http://localhost:3000/posts")
        result.its("status").should("equal", 200);

    });
    it("validate/posts api contains the correct keys and values", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            cy.log(body);

            expect(body[0]).has.property("title", "How are you>");
            expect(body[1]).has.property("title", "what are you doing?");
            expect(body[1]).has.property("author", "Aman Gupta");
            expect(body[2]).has.property("title", "what are you doing?");

            // to iterate through the whole content of the api 

            body.forEach(function(item) {
                expect(item).to.have.all.keys("id", "title", "author");
                cy.log("Author: " + item["author"] + "&title: " + item["title"]);
            });



        })
    })
})