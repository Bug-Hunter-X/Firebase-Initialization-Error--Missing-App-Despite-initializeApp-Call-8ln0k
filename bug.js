import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// ... other imports

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ... other config values
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// ... other Firebase initializations

// This code does not throw an error until you try to use a Firebase service
// that requires authentication, such as getAuth.  The error then is typically:
// "Firebase: No Firebase App '[DEFAULT]' has been created - call firebase.initializeApp() (app/no-app)"
// Even though initializeApp has been called.  Why?

// The problem is usually caused by importing firebase services conditionally, 
// and not accounting for cases where the import does not occur.

// Example of problematic conditional import:

if (someCondition) {
  import { getAuth } from "firebase/auth";
  const auth = getAuth(app);
  // ... use auth
}

// Solution below