import { TestBed } from '@angular/core/testing';

import { ModalActionsService } from './modal-actions.service';

describe('ModalActionsService', () => {
  let service: ModalActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
