This repository demonstrates a common but subtle error in Firebase initialization.  The error message, "Firebase: No Firebase App '[DEFAULT]' has been created - call firebase.initializeApp() (app/no-app)", appears even when initializeApp has seemingly been called.  This is usually because of conditional imports of Firebase services that are never executed.  The included `bug.js` file shows an example of this error.  `bugSolution.js` shows a solution.  The problem and solution are detailed in the file comments.