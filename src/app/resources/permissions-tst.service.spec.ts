/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PermissionsTstService } from './permissions-tst.service';

describe('PermissionsTstService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionsTstService]
    });
  });

  it('should ...', inject([PermissionsTstService], (service: PermissionsTstService) => {
    expect(service).toBeTruthy();
  }));
});
