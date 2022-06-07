import { Component, OnInit } from '@angular/core';
import { Ordonance } from '../model/Ordonance';
import { OrdonanceService } from '../service/ordonance.service';

@Component({
  selector: 'app-ordonance',
  templateUrl: './ordonance.component.html',
  styleUrls: ['./ordonance.component.css']
})
export class OrdonanceComponent implements OnInit {
  ordonance: Ordonance;
  ListOrdonances :Ordonance[];
  isMenuOpened: boolean=false;
  constructor(private service :OrdonanceService) { }

  ngOnInit(): void {
    this.getAllOrdonances();
    this.toggleMenu();
  }
  getAllOrdonances(){
    this.service.getAllOrdonances().subscribe((data:Ordonance[])=>this.ListOrdonances=data);
  }
  toggleMenu(){
    this.isMenuOpened=!this.isMenuOpened;
  }
}
