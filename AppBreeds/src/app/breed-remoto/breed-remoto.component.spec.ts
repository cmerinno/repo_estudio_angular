import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedRemotoComponent } from './breed-remoto.component';

describe('BreedRemotoComponent', () => {
  let component: BreedRemotoComponent;
  let fixture: ComponentFixture<BreedRemotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedRemotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedRemotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
