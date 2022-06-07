import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { certificat } from '../model/Certificat';
import { CertificatService } from '../service/certificat.service';

@Component({
  selector: 'app-detail-certificat',
  templateUrl: './detail-certificat.component.html',
  styleUrls: ['./detail-certificat.component.css']
})
export class DetailCertificatComponent implements OnInit {
  idCertificat:number;
  certificat:certificat;
  constructor(private route: ActivatedRoute,private service :CertificatService) { }

  ngOnInit(): void {
    this.certificat=new certificat();
    this.idCertificat = this.route.snapshot.params['idCertificat'];
     this.service.getCertificat(this.idCertificat).subscribe(data => {
      console.log(data)
      this.certificat = data;
    }, error => console.log(error));
  }

}
