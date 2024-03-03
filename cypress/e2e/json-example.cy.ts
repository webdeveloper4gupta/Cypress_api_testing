///<reference types="Cypress" />

describe("JSON object",()=>{
    it("first test case",()=>{
        const exampleObject={"Key1":"Tim","key2":"Jones"};
        const exampleArrayOfValues=["Sophie","Rose","Howard"];
         

        const users={
            "firstName":"Joe",
            "lastNmae":"Blogs",
            "Age":21,
            "Students":[
                {
                    "firstName":"Jim",
                    "lastName":"Blogs",
                },
                {
                    "firstName":"Sarah",
                    "lastName":"Parker",
                }
            ]
        }


        cy.log(exampleObject["key1"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.Key1);

        cy.log(exampleArrayOfValues[0]);
        cy.log(exampleArrayOfValues[1]);


        cy.log(users.Students[0].lastName);
    })
})