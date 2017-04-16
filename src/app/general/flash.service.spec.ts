/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlashService } from './flash.service';

describe('FlashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlashService]
    });
  });

  it('should ...', inject([FlashService], (service: FlashService) => {
    expect(service).toBeTruthy();
  }));
});
