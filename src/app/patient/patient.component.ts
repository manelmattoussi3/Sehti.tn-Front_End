import { Component, OnInit } from '@angular/core';
import { patient } from '../model/patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
listPatient:patient[];
patient:patient;
  constructor(private service:PatientService) { }

  ngOnInit(): void {
    this.patient=new patient();
    this.service.getAllPatient().subscribe((data: patient[]) => this.listPatient= data);
  }

}
