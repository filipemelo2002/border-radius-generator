import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() topLeft = 50;
  @Output() changeTopLeft = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeTopLeft(value: string) {
    this.changeTopLeft.emit(Number(value));
  }
}
