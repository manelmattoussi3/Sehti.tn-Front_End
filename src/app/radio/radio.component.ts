import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { OperationRadio } from '../model/OperationRadio';
import { RadioService } from '../service/radio.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
radio:OperationRadio;
ListRadios :OperationRadio[];
matchModeOptions: SelectItem[];
  constructor(private service:RadioService) { }

  ngOnInit(): void {
    this.getAllOperationRadio();
    this.matchModeOptions = [
      { label: 'Commence avec', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contient', value: FilterMatchMode.CONTAINS },
      { label: 'Ne contient pas', value: FilterMatchMode.NOT_CONTAINS },
      { label: 'Se termine par', value: FilterMatchMode.EQUALS },
      { label: 'Equivaut à', value: FilterMatchMode.NOT_EQUALS },


    ];
  }
  getAllOperationRadio(){
    this.service.getAllRadio().subscribe((data:OperationRadio[])=>{console.log(data),this.ListRadios =data},error => console.log(error));
}
getEventValue($event: any): string {
  return $event.target.value;
}
clear(table: Table) {

  table.clear();

}
}