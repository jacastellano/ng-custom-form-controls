import { Component, OnInit, ViewChild, forwardRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RichTextEditorComponent),
      multi: true
    }
  ]
})
export class RichTextEditorComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @ViewChild('richtexteditor')
  richTextEditorElement;

  inputValue: string;

  propagateChange = (_: any) => { };

  constructor() { }

  ngOnInit(): void { }

  writeValue(obj: any): void {
    this.inputValue = obj;
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange');
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState');
  }

  ngAfterViewInit() {
    this.richTextEditorElement.nativeElement.innerHTML = this.inputValue;
  }

}
