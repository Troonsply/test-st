import {errorsValidate} from "./constants/errorsValidate";

export function validatePassword(password) {
   if (password.length < 8) {
     return {success:true, error:errorsValidate.length};
   }
   if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
     return {success:true, error:errorsValidate.case};
   }
   if (!/\d/.test(password) ) {
     return {success:true, error:errorsValidate.number};
   }
   if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
     return {success:true, error:errorsValidate.special};
   }
   return {success:true, error:null};
}