import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { PasswordComplexityIndicationComponent } from './_forms/password-complexity-indication/password-complexity-indication.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PasswordFieldComponent,
    TextInputComponent,
    PasswordComplexityIndicationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }