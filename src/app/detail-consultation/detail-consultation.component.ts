import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consultation } from '../model/Consultation';
import { ConsultationService } from '../service/consultation.service';

@Component({
  selector: 'app-detail-consultation',
  templateUrl: './detail-consultation.component.html',
  styleUrls: ['./detail-consultation.component.css']
})
export class DetailConsultationComponent implements OnInit {
 
idConsultation:number;
Listconsultation:Consultation[];
consultation:Consultation;
  constructor(private route: ActivatedRoute,private service :ConsultationService) { }

  ngOnInit(): void {
    this.consultation=new Consultation();
    this.idConsultation = this.route.snapshot.params['idConsultation'];
     this.service.getConsultation(this.idConsultation).subscribe(data => {
      console.log(data)
      this.consultation = data;
    }, error => console.log(error));
  }

}
