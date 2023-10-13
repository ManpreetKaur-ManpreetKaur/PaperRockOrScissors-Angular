import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  today: Date
  @Input() name: string = "Sheridan College"

  constructor() {
    this.today = new Date()
  }
}
