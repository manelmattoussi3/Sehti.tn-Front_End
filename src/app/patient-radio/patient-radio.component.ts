import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { patient } from '../model/patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patient-radio',
  templateUrl: './patient-radio.component.html',
  styleUrls: ['./patient-radio.component.css']
})
export class PatientRadioComponent implements OnInit {
  patient:patient;
  ListPatients:patient[];
  matchModeOptions: SelectItem[];
  constructor(private service:PatientService) { }

  ngOnInit(): void {
    this.getAllPatients();
    this.matchModeOptions = [
      { label: 'Commence avec', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contient', value: FilterMatchMode.CONTAINS },
      { label: 'Ne contient pas', value: FilterMatchMode.NOT_CONTAINS },
      { label: 'Se termine par', value: FilterMatchMode.EQUALS },
      { label: 'Equivaut à', value: FilterMatchMode.NOT_EQUALS },


    ];
  }
  getAllPatients(){
    this.service.getAllPatient().subscribe((data:patient[])=>{console.log(data),this.ListPatients=data},error=>console.log(error));
  }
  getEventValue($event: any): string {
    return $event.target.value;
  }
  clear(table: Table) {
  
    table.clear();
  
  }
}
