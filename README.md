## Responsive Quiz-App using ReactJS
### [Link](https://reactjs-apeksha.vercel.app/) to the application

[API used](https://opentdb.com/api_config.php)

1.	This is a responsive Quiz web application using ReactJS. 
2.	It consists 4 major components: 
  *	Home: A container displayed at the homepage that takes the name of the user and lets us start the quiz. 
  *	Footer 
  * Quiz: Contains the layout of the quiz page where the quiz takes place. It displays the current score during the quiz. 
  *	Question: A container that displays the questions along with options, we can also quit the quiz anytime with the quit button available. 
3. Functionalities: 
 * getquestions(): this function allows us to extract questions along with answer from the api using axios library. 
 * React hooks used:
   * questions, setquestions: allows us to store the questions in the variable 
   * result,setresult: lets us keep track of the current score and display it.
   * currQues,setcurrQues: lets us update the index value of questions array to move on to the next question during the quiz. 
* For Popup texts: 
*	reactjs-popup library of react is used.
* Using ternary operator for if/else we provide 3 different texts according to score. 



Screenshots:
- HOMEPAGE:
![image](https://user-images.githubusercontent.com/84583787/178573574-67e3c061-dbb6-4c4f-a545-7b526d9ee32f.png)

![image](https://user-images.githubusercontent.com/84583787/178573602-02a078bf-a410-4336-b277-5fe41ad6c555.png)

- QUIZ PAGE:
![image](https://user-images.githubusercontent.com/84583787/178573662-44160262-55ab-4bbd-8b66-c0d096d8b9ae.png)

![image](https://user-images.githubusercontent.com/84583787/178573691-2dadf7bb-dce2-4614-ac4e-b6fe65867034.png)

![image](https://user-images.githubusercontent.com/84583787/178573798-13985ed2-df6a-4267-b280-d2c8c82d57df.png)

![image](https://user-images.githubusercontent.com/84583787/178573829-bbe92bc0-a9eb-4b34-8a7b-261ed89edb7e.png)

- Error shown if option not selected and clicked on ‘Next Question’ 

![image](https://user-images.githubusercontent.com/84583787/178573974-07b9f7c9-1e6b-4ae7-abbd-f75c0de73c34.png)

- RESULT MESSAGE:
![image](https://user-images.githubusercontent.com/84583787/178574080-db95e9fa-de8c-4573-9802-30d651e58703.png)

![image](https://user-images.githubusercontent.com/84583787/178574104-437b6b73-7396-4bd3-a196-953ad0930022.png)

![image](https://user-images.githubusercontent.com/84583787/178574136-2e461e4c-e7c4-47da-86ba-4b44f0ee0b08.png)

![image](https://user-images.githubusercontent.com/84583787/178574180-dac9ee86-6010-4059-a5a4-a2cd2b6e3384.png)
