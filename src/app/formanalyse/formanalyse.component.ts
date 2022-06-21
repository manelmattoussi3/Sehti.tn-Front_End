import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formanalyse',
  templateUrl: './formanalyse.component.html',
  styleUrls: ['./formanalyse.component.css']
})
export class FormanalyseComponent implements OnInit {
  registerForm :FormGroup;
  idOperation: string;
    observation: string;
    codeAnalyse: string;
    dateAnalyse: Date;
    motif: string;
    resultat: string;
    etablissement: string;
    type: any;
    etat: any;
  constructor() { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      idOperation:new FormControl('',Validators.required),
      observation:new FormControl('',Validators.required),
      codeAnalyse:new FormControl('',Validators.required),
      motif:new FormControl(''),
      resultat:new FormControl('',Validators.required),
      etablissement:new FormControl('',Validators.required),
      type:new FormControl(''),
      etat:new FormControl('',Validators.required)
    });
  }

}
