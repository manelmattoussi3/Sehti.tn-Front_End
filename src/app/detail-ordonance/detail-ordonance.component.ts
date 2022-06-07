import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ordonance } from '../model/Ordonance';
import { OrdonanceService } from '../service/ordonance.service';

@Component({
  selector: 'app-detail-ordonance',
  templateUrl: './detail-ordonance.component.html',
  styleUrls: ['./detail-ordonance.component.css']
})
export class DetailOrdonanceComponent implements OnInit {
  idOrdonance:number;
  ordonance:Ordonance;
  constructor(private route: ActivatedRoute,private service :OrdonanceService) { }

  ngOnInit(): void {
    this.ordonance=new Ordonance();
    this.idOrdonance = this.route.snapshot.params['idOrdonance'];
     this.service.getOrdonance(this.idOrdonance).subscribe(data => {
      console.log(data)
      this.ordonance = data;
    }, error => console.log(error));
  }

  

}
