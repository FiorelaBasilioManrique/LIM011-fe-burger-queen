import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLinksComponent } from './menu-links.component';

describe('MenuLinksComponent', () => {
  let component: MenuLinksComponent;
  let fixture: ComponentFixture<MenuLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
