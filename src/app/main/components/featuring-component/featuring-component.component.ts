import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featuring-component',
  templateUrl: './featuring-component.component.html'
})
export class FeaturingComponentComponent implements OnInit {

  @Input() marginProp: string = '';
  @Input() imageProp: string = '';
  @Input() index: number = 0;
  @Input() txt1Prop: string = '';
  @Input() txt2Prop: string = '';
  imagePositionProp: string = '';

  constructor() { }

  ngOnInit(): void {
    if(this.index % 2 === 0){
      this.imagePositionProp = 'flex-direction: row-reverse';
    }else{
      this.imagePositionProp = '';
    }
  }

}
