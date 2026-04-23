import {test} from '@playwright/test';

test ("Simple google test", async ({page}) => {

    await page.goto("https://www.google.com/");

    //pause for 3 seconds
    await page.waitForTimeout(3000); 

   let searchBox =  page.locator("//textarea[@class ='gLFyf']"); 
   
   //await searchBox.type("CYDEO"); // type methods: types each character one by one.

   await searchBox.fill("CYDEO"); // fill method: fills the entire text at once.

   await page.waitForTimeout(3000);

    await searchBox.press("Enter"); // press method: presses the key that we specify.
});  





