import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dossierMedical } from '../model/DossierMedical';
import { LettreConfidentielle } from '../model/LettreConfidentielle';
import { DossierMedicalService } from '../service/dossier-medical.service';

@Component({
  selector: 'app-dossier-lettre',
  templateUrl: './dossier-lettre.component.html',
  styleUrls: ['./dossier-lettre.component.css']
})
export class DossierLettreComponent implements OnInit {
  idl:number;
  lettres:LettreConfidentielle[];
  l:LettreConfidentielle;
  dossier:dossierMedical;
  

isMenuOpened: boolean=false;
  constructor(private route: ActivatedRoute,private service :DossierMedicalService ) { }

  ngOnInit(): void {
    this.dossier=new dossierMedical();
    this.l=new LettreConfidentielle();
    this.idl = this.route.snapshot.params['idDossier'];
     this.service.AccederLettreByDossier(this.idl).subscribe(data => {
      console.log(data)
      this.lettres = data;
    }, error => console.log(error));
  }
  toggleMenu(){
    this.isMenuOpened=!this.isMenuOpened;
  }
}
