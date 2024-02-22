import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordComplexityService {
  passwordComplexity = 'initial';

  constructor(){}

  validatePassword(value: string) {
    let passwordComplexity: string;

    if (value.length === 0) {
        passwordComplexity = 'initial';
    } else if (value.length < 8) {
        passwordComplexity = 'invalid';
    } else {
        const hasLetters = /[a-zA-Z]/.test(value);
        const hasDigits = /\d/.test(value);
        const hasSymbols = /[^\w\s]/.test(value);

        if (hasLetters && hasDigits && hasSymbols) {
            passwordComplexity = 'strong';
        } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
            passwordComplexity = 'medium';
        } else {
            passwordComplexity = 'easy';
        }
    }

    this.passwordComplexity = passwordComplexity;
  }
}