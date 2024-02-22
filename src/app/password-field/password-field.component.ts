import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordComplexityService } from '../_services/password-complexity.service';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.css']
})
export class PasswordFieldComponent implements OnInit {
  passwordForm: FormGroup = new FormGroup({});
  
  constructor(public passwordComplexityService: PasswordComplexityService){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  checkPasswordComplexity(value: string){
    this.passwordComplexityService.validatePassword(value);
  }
}