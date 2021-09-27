import { TestBed } from '@angular/core/testing';

import { CatalogToCartService } from './catalog-to-cart.service';

describe('CatalogToCartService', () => {
  let service: CatalogToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogToCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
