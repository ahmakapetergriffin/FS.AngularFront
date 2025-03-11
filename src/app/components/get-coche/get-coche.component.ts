import { Component, OnInit } from '@angular/core';
import { CocheService } from 'src/app/service/coche.service';

@Component({
  selector: 'app-get-coche',
  templateUrl: './get-coche.component.html',
  styleUrls: ['./get-coche.component.sass']
})
export class GetCocheComponent implements OnInit {

  coches:any = [];
  constructor(private cocheService: CocheService) {}

  ngOnInit() {
    this.getAllCoches();
  }

  getAllCoches() {
    this.cocheService.getAllCoche().subscribe((res) => {
      console.log(res);
      this.coches = res;
    })
  }

  deleteCoche(id: number) {
    this.cocheService.deleteCoche(id).subscribe((res) => {
      console.log(res); 
      this.getAllCoches();
    })
  }

}
