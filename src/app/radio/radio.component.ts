import { Component, OnInit } from '@angular/core';
import { OperationRadio } from '../model/OperationRadio';
import { RadioService } from '../service/radio.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
radio:OperationRadio;
ListRadio :OperationRadio[];
isMenuOpened: boolean=false;
  constructor(private service:RadioService) { }

  ngOnInit(): void {
    this.getAllOperationRadio();
    this.toggleMenu();
  }
  getAllOperationRadio(){
    this.service.getAllRadio().subscribe((data:OperationRadio[])=>this.ListRadio =data);
}
toggleMenu(){
  this.isMenuOpened=!this.isMenuOpened;
}
}