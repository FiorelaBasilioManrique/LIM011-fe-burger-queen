import { TestBed } from '@angular/core/testing';
import { MenuNameService } from './menu-name-service.service';

describe('MenuNameService', () => {
  let service: MenuNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
