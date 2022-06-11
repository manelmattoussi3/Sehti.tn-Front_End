import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { DemandeAcce } from '../model/DemandeAcce';
import { OperationAnalyse } from '../model/OperationAnalyse';
import { AnayseService } from '../service/analyse.service';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {
analyse: OperationAnalyse;
ListAnalyses :OperationAnalyse[];
isMenuOpened: boolean=false;
matchModeOptions: SelectItem[];
  loading: boolean = true;
  selectedAnalyse:OperationAnalyse;
  listdemandes: DemandeAcce[];
  display: boolean = false;
  constructor(private service:AnayseService) { }

  ngOnInit(): void {
    this.getAllAnalyses();
    this.toggleMenu();
    this.matchModeOptions = [
      { label: 'Commence avec', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contient', value: FilterMatchMode.CONTAINS },
      { label: 'Ne contient pas', value: FilterMatchMode.NOT_CONTAINS },
      { label: 'Se termine par', value: FilterMatchMode.EQUALS },
      { label: 'Equivaut à', value: FilterMatchMode.NOT_EQUALS },


    ];
  }
getAllAnalyses(){
   this.service.getAnalyse().subscribe((data :OperationAnalyse[])=>this.ListAnalyses=data);
}
toggleMenu(){
  this.isMenuOpened=!this.isMenuOpened;
}
onRowSelect(event :any) {
  this.listdemandes=event.data.demandesacces;
      this.display = true;
      console.log(event);
  
    }
    getEventValue($event:any) :string {
      return $event.target.value;
    } 
    clear(table: Table) {
  
      table.clear();
  
    }
}
