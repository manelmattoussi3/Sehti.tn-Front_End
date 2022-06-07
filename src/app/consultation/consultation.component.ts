import { Component, OnInit } from '@angular/core';
import { Consultation } from '../model/Consultation';
import { ConsultationService } from '../service/consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  consultation: Consultation;
  ListConsultations :Consultation[];
  isMenuOpened: boolean=false;
  constructor(private service :ConsultationService) { }

  ngOnInit(): void {
    this.getAllConsultations();
    this.toggleMenu();
  }
getAllConsultations(){
  this.service.getAllConsultation().subscribe((data:Consultation[])=>this.ListConsultations=data);
}
toggleMenu(){
  this.isMenuOpened=!this.isMenuOpened;
}
}
