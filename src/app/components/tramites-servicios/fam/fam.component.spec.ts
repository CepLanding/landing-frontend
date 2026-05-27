import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamComponent } from './fam.component';

describe('FamComponent', () => {
  let component: FamComponent;
  let fixture: ComponentFixture<FamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
