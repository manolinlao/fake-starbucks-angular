import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {

  @Input() imageProp: string = '';  
  @Input() txt1Prop: string = '';
  @Input() txt2Prop: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }
}
