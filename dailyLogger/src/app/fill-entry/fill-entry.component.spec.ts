import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillEntryComponent } from './fill-entry.component';

describe('FillEntryComponent', () => {
  let component: FillEntryComponent;
  let fixture: ComponentFixture<FillEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
