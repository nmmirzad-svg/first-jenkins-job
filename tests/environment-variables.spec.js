import {test} from '@playwright/test';

test('', async ({page}) => { 

    console.log(process.env.PRACTICE_USERNAME);
    console.log(process.env.PRACTICE_PASSWORD);

    console.log(`Username is : ${process.env.PRACTICE_USERNAME} `);
    console.log(`Password is : ${process.env.PRACTICE_PASSWORD}`);

});
test('Bypass authentication by encoding the credentials base64 format ', async ({page}) => { 

    // the best way is to do encoding credentials  
     // this is the way to encode the credentials in base64 format.

     let encodedCredential = Buffer.from('${process.env.PRACTICE_USERNAME} :${process.env.PRACTICE_PASSWORD}').toString("base64");
     await page.setExtraHTTPHeaders({'Authorization': 'Basic ${encodedCredential}'});

      page.goto("https://the-internet-5chk.onrender.com/basic_auth");    
     
       await page.waitForTimeout(3000);   
 
 });





