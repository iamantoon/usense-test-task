import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.css']
})
export class PasswordFieldComponent implements OnInit {
  passwordForm: FormGroup = new FormGroup({});
  passwordComplexity = 'initial';
  showPassword = false;

  ngOnInit(): void {
    this.initializeForm();

    this.passwordForm.get('password')?.valueChanges.subscribe(value => {
      this.validatePassword(value);
    });
  }

  initializeForm(){
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  validatePassword(value: string) {
    if (this.isStrong(value)){
      this.passwordComplexity = 'strong';
    } else if (this.isMedium(value)){
      this.passwordComplexity = 'medium';
    } else if (this.isEasy(value)){
      this.passwordComplexity = 'easy';
    } else if (value.length === 0){
      this.passwordComplexity = 'initial';
    }
  }

  private isEasy(password: string){
    const letterPattern = /^[a-zA-Z]+$/;
    const digitPattern = /^[0-9]+$/;
    const symbolPattern = /^[^\w\s]+$/;

    return letterPattern.test(password) || digitPattern.test(password) || symbolPattern.test(password);
  }

  private isMedium(password: string){
    const letterSymbolPattern = /[a-zA-Z]+[^a-zA-Z0-9\s]+/;
    const symbolLetterPattern = /[^a-zA-Z0-9\s]+[a-zA-Z]+/;
    const letterDigitPattern = /[a-zA-Z]+[0-9]+/;
    const digitLetterPattern = /[0-9]+[a-zA-z]+/;
    const digitSymbolPattern = /[0-9]+[^a-zA-Z0-9\s]+/;
    const symbolDigitPattern = /[^a-zA-Z0-9\s]+[0-9]+/

    return letterSymbolPattern.test(password) || letterDigitPattern.test(password) || digitSymbolPattern.test(password)
      || symbolLetterPattern.test(password) || digitLetterPattern.test(password) || symbolDigitPattern.test(password);
  }

  private isStrong(password: string){
    const strongCombination1 = /[a-zA-Z]+[0-9]+[^a-zA-Z0-9\s]+/;
    const strongCombination2 = /[a-zA-Z]+[^a-zA-Z0-9\s]+[0-9]+/;
    const strongCombination3 = /[0-9]+[a-zA-Z]+[^a-zA-Z0-9\s]+/;
    const strongCombination4 = /[0-9]+[^a-zA-Z0-9\s]+[a-zA-Z]+/;
    const strongCombination5 = /[^a-zA-Z0-9\s]+[a-zA-Z]+[0-9]+/;
    const strongCombination6 = /[^a-zA-Z0-9\s]+[0-9]+[a-zA-Z]+/;

    return strongCombination1.test(password) || strongCombination2.test(password) || strongCombination3.test(password) 
      || strongCombination4.test(password) || strongCombination5.test(password) || strongCombination6.test(password);
  }

  toggleShowPassword(){
    if (this.showPassword) {
      this.showPassword = false;
    } else {
      this.showPassword = true;
    }
  }
}
