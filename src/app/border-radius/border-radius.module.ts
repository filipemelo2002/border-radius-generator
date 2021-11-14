import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './border-radius.component';
import { FormComponent } from './form/form.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RectangleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[AppComponent]
})
export class BorderRadiusModule { }
