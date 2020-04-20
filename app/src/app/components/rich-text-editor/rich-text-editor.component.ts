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
    },
  ]
})
export class RichTextEditorComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @ViewChild('richtexteditor')
  richTextEditorElement;

  inputValue: string;
  propagateChange = (_: any) => { };
  propagateTouched = () => { };

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.inputValue = obj;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled);
  }

  ngAfterViewInit() {
    this.richTextEditorElement.nativeElement.innerHTML = this.inputValue;
  }

  public onChange($event) {
    this.propagateChange($event.target.innerHTML);
  }

  public onFocus() {
    this.propagateTouched();
  }

  public onKeydown($event) {
    console.log($event);
  }

}
