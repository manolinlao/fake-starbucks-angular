import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainData } from '../../interfaces/maindata.interface';
import { MainDataService } from '../../services/main-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, AfterViewInit{

  @ViewChild("mainContainer") myContainer: ElementRef | undefined;
  @ViewChild("loader") myLoader: ElementRef | undefined;

  marginProp = 'mb-4 mt-4';

  constructor( private mainDataService: MainDataService ) { }

  ngOnInit(): void {
    this.mainDataService.loadData();
  }

  ngAfterViewInit(): void {
    setTimeout( ()=>{
      (this.myContainer?.nativeElement).style.visibility = "visible";
      (this.myLoader?.nativeElement).style.display = "none";
    },500);
    
  }

  get mainData(): MainData[]{
    return this.mainDataService.data;
  }

}
