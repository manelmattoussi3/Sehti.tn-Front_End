import { Component, OnInit } from '@angular/core';
import { LettreConfidentielle } from '../model/LettreConfidentielle';
import { LettreConfidentielleService } from '../service/lettre-confidentielle.service';

@Component({
  selector: 'app-lettre-confidentielle',
  templateUrl: './lettre-confidentielle.component.html',
  styleUrls: ['./lettre-confidentielle.component.css']
})
export class LettreConfidentielleComponent implements OnInit {
  lettre: LettreConfidentielle;
  ListLettres :LettreConfidentielle[];
  isMenuOpened: boolean=false;
  constructor(private service :LettreConfidentielleService) { }

  ngOnInit(): void {
    this.getAllLettres();
    this.toggleMenu();
  }
  getAllLettres(){
    this.service.getLettreConfidentielle().subscribe((data:LettreConfidentielle[])=>this.ListLettres=data);
  }
  toggleMenu(){
    this.isMenuOpened=!this.isMenuOpened;
  }
}
