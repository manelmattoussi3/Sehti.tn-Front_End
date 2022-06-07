import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { patient } from '../model/patient';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.component.html',
  styleUrls: ['./detail-patient.component.css']
})
export class DetailPatientComponent implements OnInit {
  id: number;
  patient:patient;
  constructor(private route: ActivatedRoute,private service :PatientService) { }

  ngOnInit(): void {
    this.patient=new patient();
    this.id = this.route.snapshot.params['idPatient'];
     this.service.getPatientById(this.id).subscribe(data => {
      console.log(data)
      this.patient = data;
    }, error => console.log(error));
}
  }


