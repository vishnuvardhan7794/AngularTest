import { TestBed } from '@angular/core/testing';

import { EmitvaluesService } from './emitvalues.service';

describe('EmitvaluesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmitvaluesService = TestBed.get(EmitvaluesService);
    expect(service).toBeTruthy();
  });
});
