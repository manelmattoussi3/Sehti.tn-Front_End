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
  ListAnalyses: OperationAnalyse[];
  
  matchModeOptions: SelectItem[];
  loading: boolean = true;

 
  display: boolean = false;
  constructor(private service: AnayseService) { }

  ngOnInit(): void {
    this.getAllAnalyses();
 this.analyse=new OperationAnalyse();
    this.matchModeOptions = [
      { label: 'Commence avec', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contient', value: FilterMatchMode.CONTAINS },
      { label: 'Ne contient pas', value: FilterMatchMode.NOT_CONTAINS },
      { label: 'Se termine par', value: FilterMatchMode.EQUALS },
      { label: 'Equivaut à', value: FilterMatchMode.NOT_EQUALS },


    ];
  }
  getAllAnalyses() {
    this.service.getAnalyse().subscribe((data: OperationAnalyse[]) => {console.log(data),this.ListAnalyses=data},error => console.log(error));
    
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }
  clear(table: Table) {

    table.clear();

  }
}
