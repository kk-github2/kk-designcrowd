Hello reviewer/team, 

Thanks for giving me this challenge - I found it really interesting! 

**Test scenarios** </br> 
I have defined them on a google drive file here - https://docs.google.com/spreadsheets/d/1CcAP-ltvkkwcGJBPhkxFPXW_xlOhGBuBxFfrYvOkCLc/edit?usp=sharing 

**Improvements/Suggestions** </br>
These are not essentially defects but key points that i noticed which could widely improve user experience. please find them on a separate tab in the same google drive spreadsheet above.

**Tech Spec** </br>
Tool - Cypress
Language - Typescript

**Automation** </br>
I'd like to kindly note that I'm a combination QA engineer who has worked on manual testing and implemented mobile automation framework using Appium. Yet, since I did have some exposure to Cypress as my web application team use the tool for web automation, I wanted to give my best shot at Cypress for Automation. 

  **How it works:**
  (1) I have tried and automated the high priority test scenarios from the spreadsheet. </br>
  (2) Please download the file from the git repository https://github.com/kk-github2/kk-designcrowd.git to your local </br>
  (3) In the interest of time, I have split the test scenarios into 2 main test scrips/test cases that can be found under Cypress/integration/examples - 1_SearchPage.ts and 2_DesignEditSave.ts </br>
  (3) Use VS code and its terminal to execute  </br>
  (4) Open cypress test runner using command npx cypress open to run the tests interactively</br>
  (5) click open the 1_SearchPage.ts to run/execute it visually </br>
      What this does - Running this test script will start from the user login scenario, followed by the user wanting to create a new design. The user then searches for a specific template 'birthday' and from the designs displayed, selects Instagram category designs. </br>
  (6) click open the 2_DesignEditSave to run/execute it visually </br>
      What this does - Running this test script will start from the Create new design page where the user clicks on a design to Edit. This action will ask the user to login, thereby authorising them to edit. This is then followed by checking key edit actions such as changing text, Undo, redo, delete and save</br>
  (7) If only the runs needs to be tested please run individual file names on the terminal by passing command "npx run <filename.ts>"
 
**Please read** </br>
- I initially wanted to implement the tests based on POM(page object model). However since Cypress does not recommend using POMs and instead defining the actions under the commands.js file and calling it in the test case as per need, I have implemented similar strategy under Cypress/support/commands.js</br>
- I use a SelectorsHub plugin for Chrome in order to locate properties of certain elements on the page </br>
- I have covered unit testing already by using 'it.only' for certain blocks of code. I then removed all unit tested parts to see how they run E2E</br>
- During automation I found that certain elements that I wanted to use were missing key fields such as id or input type etc. I have to the best of my knowledge utilised other available attributes of the element for automation. </br>
- One of the challenges I encountered was automating the My account element at tht top right corner. The selectors used were hidden and I tried my best to locate then by waiting etc, but still I could not. Keen to learn that </br>
- I created a custom command for testing download (which can be found under Cypress/support/commands.js) but I did not proceed with it as it was only for premium users. </br>

Overall, I have tried to do this task to the best abilities of my knowledge as a QA engineer. I'm super keen to discuss this further on how the code can be improved from a point of performance, scalability and prod use! </br>


 
      
  

