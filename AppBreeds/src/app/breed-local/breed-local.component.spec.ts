import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedLocalComponent } from './breed-local.component';

describe('BreedLocalComponent', () => {
  let component: BreedLocalComponent;
  let fixture: ComponentFixture<BreedLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
