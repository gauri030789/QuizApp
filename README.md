Quiz App - README Project Overview This project is a Quiz Application built using React.js. The app allows users to answer multiple-choice questions, track their score, and view a summary at the end of the quiz. The quiz data is fetched from an external API, and fallback static data is provided in case of any issues with the API.

Features Question Navigation: Users can navigate through the quiz questions. Score Tracking: The app keeps track of the user's score as they answer questions correctly. Timer: Each question is timed (30 seconds). Progress Bar: The app shows the user’s progress as they complete the quiz. End of Quiz Summary: After completing the quiz, the user sees a summary of their score. Loading State: A loading screen is shown while fetching the quiz data. Error Handling: If the API fetch fails, fallback static data is used. Tech Stack React.js: JavaScript library for building user interfaces. Axios: Library for making HTTP requests to fetch quiz data. CSS: For styling the app and providing a clean and simple interface. Setup Follow these steps to set up and run the project locally:

Prerequisites Node.js installed on your machine. If you don't have it, download it from here. npm (Node Package Manager) comes bundled with Node.js. Installation Steps Clone the repository:

bash Copy Edit git clone https://github.com/your-username/quiz-app.git cd quiz-app Install dependencies:

Run the following command to install the necessary dependencies for the project:

bash Copy Edit npm install Start the development server:

To run the app locally, use the following command:

bash Copy Edit npm start This will start the development server, and you can view the app in your browser at http://localhost:3000.

Directory Structure bash Copy Edit /quiz-app |-- /public | |-- index.html # Root HTML file | |-- /src | |-- /components | | |-- Quiz.js # Main component for rendering quiz | | | |-- App.js # Root component that includes Quiz component | |-- index.js # Entry point for the React app | |-- package.json # Project dependencies and scripts |-- README.md # This file How to Use Start the App: Once the app is running, you will see the first quiz question. Answering Questions: Click on the answer options to select your answer. After each question, the next question will be displayed, and the timer will reset. View Your Progress: The progress bar will fill as you complete each question. You can also see the number of questions completed and the remaining time. End of Quiz: When you finish all the questions, you will see a summary of your score. API Used The quiz data is fetched from the following API:

Quiz API: https://api.jsonserve.com/Uw5CrX In case of any issue fetching data, fallback static data will be used instead.

Future Enhancements Question Shuffle: Randomize questions to make each quiz session unique. User Authentication: Implement user login to save quiz scores. Leaderboard: Add a leaderboard to compare scores among users. Advanced Timer: Implement an advanced timer for each individual question. Troubleshooting API Errors: If the quiz data fails to load, the app will use fallback static data. Ensure you are connected to the internet when fetching data. Slow Performance: If you experience slow performance or the app doesn't load quickly, try refreshing your browser or clearing the cache. License This project is open-source and available under the MIT License.
