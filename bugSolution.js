import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// ... other imports

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ... other config values
};

const app = initializeApp(firebaseConfig);

// Correct way to handle conditional imports:

let auth;
if (someCondition) {
  auth = getAuth(app);
  // ... use auth
} else {
  // Handle the case where authentication is not needed, 
  // or provide a default value for auth
  auth = null; // Or some other suitable default
}

// Now you can safely use auth without worrying about the app/no-app error, 
// as the variable is always defined.
// If you are using a framework like react or vue, consider moving your Firebase
// initialization logic into a central location where conditional imports are less likely.