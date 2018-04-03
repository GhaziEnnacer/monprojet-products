import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public data: Product[];

  constructor() {
    this.data = [{code: 'P100', libelle: 'café', prixUnitaire: 500.0},
                 {code: 'P200', libelle: 'thé', prixUnitaire: 600.0},
                 {code: 'P300', libelle: 'jus d\'orange', prixUnitaire: 700.0},
                 {code: 'P400', libelle: 'coca-cola', prixUnitaire: 800.0}];
  }

  ngOnInit() {
  }

}
