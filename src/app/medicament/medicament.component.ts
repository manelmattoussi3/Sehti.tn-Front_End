import { Component, OnInit } from '@angular/core';
import { Medicament } from '../model/Medicament';
import { MedicamentService } from '../service/medicament.service';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {
  medicament: Medicament;
  Listmedicaments :Medicament[];
  isMenuOpened: boolean=false;
  constructor(private service:MedicamentService) { }

  ngOnInit(): void {
    this.getAllMedicaments();
    this.toggleMenu();
  }
getAllMedicaments(){
  this.service.getAllMedicaments().subscribe((data:Medicament[])=>this.Listmedicaments=data);
}
toggleMenu(){
  this.isMenuOpened=!this.isMenuOpened;
}
}
