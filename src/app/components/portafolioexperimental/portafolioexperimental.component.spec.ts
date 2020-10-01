import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioexperimentalComponent } from './portafolioexperimental.component';

describe('PortafolioexperimentalComponent', () => {
  let component: PortafolioexperimentalComponent;
  let fixture: ComponentFixture<PortafolioexperimentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioexperimentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioexperimentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
