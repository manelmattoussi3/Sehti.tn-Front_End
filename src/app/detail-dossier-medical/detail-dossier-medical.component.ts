import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemandeAcce } from '../model/DemandeAcce';
import { dossierMedical } from '../model/DossierMedical';
import { FicheConsultation } from '../model/FicheConsultation';
import { DossierMedicalService } from '../service/dossier-medical.service';

@Component({
  selector: 'app-detail-dossier-medical',
  templateUrl: './detail-dossier-medical.component.html',
  styleUrls: ['./detail-dossier-medical.component.css']
})
export class DetailDossierMedicalComponent implements OnInit {
  id: string;
  dossier:dossierMedical;
  demande:DemandeAcce;
  listDossier: dossierMedical[];
  isMenuOpened: boolean=false;
  listFiches: FicheConsultation[];
   fiche:FicheConsultation;
  constructor(private route: ActivatedRoute,private service :DossierMedicalService) { }

  ngOnInit(): void {
    this.dossier=new dossierMedical();
    this.demande=new DemandeAcce();
    this.id = this.route.snapshot.params['idDemande'];
     this.service.AccederDossierByDemande(this.id).subscribe(data => {
      console.log(data)
      this.dossier = data;

    }, error => console.log(error));
    this.toggleMenu();
}
toggleMenu(){
  this.isMenuOpened=!this.isMenuOpened;
} 
test(id:number){
  this.service.AccederFicheByDossier(id).subscribe((data) => {
    console.log(data)
    this.fiche = data;
  }, (error) => console.log(error));

}
  }




