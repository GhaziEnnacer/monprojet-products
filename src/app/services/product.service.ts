import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductService {

  constructor() { }

  public getProduct(): Product[] {
    return [{code: 'P100', libelle: 'café', prixUnitaire: 500.0},
            {code: 'P200', libelle: 'thé', prixUnitaire: 600.0},
            {code: 'P300', libelle: 'jus d\'orange', prixUnitaire: 700.0},
            {code: 'P400', libelle: 'coca-cola', prixUnitaire: 800.0},
            {code: 'P500', libelle: 'eau gazifiée', prixUnitaire: 600.0}];
  }
}
