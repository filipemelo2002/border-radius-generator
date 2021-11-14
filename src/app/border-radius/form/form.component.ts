import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() topLeft = 50;
  @Output() changeTopLeft = new EventEmitter<number>();

  @Input() topRight = 50;
  @Output() changeTopRight = new EventEmitter<number>();

  @Input() bottomLeft = 50;
  @Output() changeBottomLeft = new EventEmitter<number>();

  @Input() bottomRight = 50;
  @Output() changeBottomRight = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeTopLeft(value: string) {
    this.changeTopLeft.emit(Number(value));
  }

  onChangeTopRight(value: string) {
    this.changeTopRight.emit(Number(value));
  }

  onChangeBottomLeft(value: string) {
    this.changeBottomLeft.emit(Number(value));
  }

  onChangeBottomRight(value: string) {
    this.changeBottomRight.emit(Number(value));
  }
}
