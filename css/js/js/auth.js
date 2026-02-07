import { auth } from "./firebase.js";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

window.recaptchaVerifier = new RecaptchaVerifier(
  'recaptcha-container',
  { size: 'normal' },
  auth
);

window.sendOTP = function () {
  const phone = document.getElementById("phone").value;

  signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP Sent Successfully");
    })
    .catch((error) => {
      alert(error.message);
    });
};

window.verifyOTP = function () {
  const otp = document.getElementById("otp").value;

  confirmationResult.confirm(otp)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(() => {
      alert("Wrong OTP");
    });
};

window.googleLogin = function () {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "dashboard.html";
    });
};
