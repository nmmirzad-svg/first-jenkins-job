import {test} from "@playwright/test"; 

test.describe("User story", () => {

    test.beforeAll(async ()=> {
        console.log("This will run before all the tests");
    });
    test.afterAll(async ()=> {
        console.log("This will run after all the tests");
    });
    

    


}); 








