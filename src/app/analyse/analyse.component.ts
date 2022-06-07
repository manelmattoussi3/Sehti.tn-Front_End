import { Component, OnInit } from '@angular/core';
import { OperationAnalyse } from '../model/OperationAnalyse';
import { AnayseService } from '../service/analyse.service';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {
analyse: OperationAnalyse;
ListAnalyses :OperationAnalyse[];
isMenuOpened: boolean=false;
  constructor(private service:AnayseService) { }

  ngOnInit(): void {
    this.getAllAnalyses();
    this.toggleMenu();
  }
getAllAnalyses(){
   this.service.getAnalyse().subscribe((data :OperationAnalyse[])=>this.ListAnalyses=data);
}
toggleMenu(){
  this.isMenuOpened=!this.isMenuOpened;
}
}
