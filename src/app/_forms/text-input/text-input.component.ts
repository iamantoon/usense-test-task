import { Component, Self, Input, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() label = '';
  @Output() validatePasswordFn = new EventEmitter<string>();

  constructor(@Self() public ngControl: NgControl){
    this.ngControl.valueAccessor = this;
  }

  writeValue(obj: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }

  onInputChange(value: any) {
    if (this.onChange) {
      this.onChange(value);
      this.validate(value.value);
    }
  }

  private onChange: (value: any) => void = () => {};

  validate(value: string){
    this.validatePasswordFn.emit(value);
  }
}