import { Component } from '@angular/core';
import { PasswordComplexityService } from 'src/app/_services/password-complexity.service';

@Component({
  selector: 'app-password-complexity-indication',
  templateUrl: './password-complexity-indication.component.html',
  styleUrls: ['./password-complexity-indication.component.css']
})
export class PasswordComplexityIndicationComponent {

  constructor(public passwordComplexityService: PasswordComplexityService){}

}