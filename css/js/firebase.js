import { initializeApp } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  appId: "PASTE_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
