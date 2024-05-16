import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() lable!:string;
  @Output() onClick = new EventEmitter<any>();

onClickButton() {
    this.onClick.emit('submit');
  }
}
