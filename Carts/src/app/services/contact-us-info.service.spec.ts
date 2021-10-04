import { TestBed } from '@angular/core/testing';

import { ContactUsInfoService } from './contact-us-info.service';

describe('ContactUsInfoService', () => {
  let service: ContactUsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactUsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
