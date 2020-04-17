import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    RichTextEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
