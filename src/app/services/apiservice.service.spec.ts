import { TestBed, inject } from '@angular/core/testing';

import { ApiserviceService } from './apiservice.service';

describe('ApiserviceService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiserviceService]
    });
  });

  it('should be created', inject([ApiserviceService], (service: ApiserviceService) => {
    service.getUser('nartawak')
      .subscribe((result:any) => {
        console.log('next');
        expect(result.login).toBe('nartawak')
      }, () => {
        console.log('error');
        fail("Do not fail")
      }, () => {
        console.log('complete');
      });
    expect(service).toBeTruthy();
  }));
});
