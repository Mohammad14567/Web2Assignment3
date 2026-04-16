
                                                      Fitness Management System

                                                         Project Description
                          A simple Backend Project Built By Node.js using express And MySQL and Sequelize ORM

                                                          Setup Instructions
                          First of all you have to open the terminal and write `npm install`, And Make Sure That
                          MySQL Server is running on your device like ( XAMPP, MySQL Installer ), Then Create An
                           Empty Database name it `my_db`, After running the server create the Tables and the
                             Relations by implementing this code in terminal `npx sequelize-cli db:migrate`


                                                        How To Run The Project
                                  Use the code in terminal `node server.js`, if it worked you'll get
                                               Server is running on http://localhost:3000

                                                       Available API ( Endpoints )
            1) Method : GET -> PURPOSE: GETTING ALL WORKOUTS -> ENDPOINT: /workouts -> SERVER SENDS : A LIST OF ALL WORKOUTS
        2) METHOD : POST -> PURPOSE : ADDING A NEW WORKOUT -> ENDPOINT : /workouts -> SERVER SENDS: SUCCESS MESSAGE ,DETAILS OF THE ADDED WORKOUT 
3) METHOD : PUT - > PURPOSE : EDITING WORKOUT - > ENDPOINT : /workouts/id/ -> SERVER SENDS: Success Message, assuring the workout has been edited
    4) METHOD : DELETE - > PURPOSE : DELETING WORKOUT -> ENDPOINT : workouts/id/ -> SERVER SENDS: SUCCESS MESSAGE, ASSURING WORKOUT IS DELETED

                                                           Sample Requests
1) CREATE -> USING THE METHOD: POST
        {
  "title": "Bench Press",
  "duration": 45,
  "userId": 1
}

2) UPDATE -> USING THE METHOD: PUT
{
  "title": "Updated Bench Press",
  "duration": 50
}

3) READ -> USING THE METHOD: GET
No Body needed, request the URL: http://localhost:3000/workouts

4) DELETE -> USING THE METHOD: DELETE
No Body needed, http://localhost:3000/workouts/2 ( Workout Number 2 is gonna be deleted )
