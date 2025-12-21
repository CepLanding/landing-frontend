import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinesDeberesComponent } from './fines-deberes.component';

describe('FinesDeberesComponent', () => {
  let component: FinesDeberesComponent;
  let fixture: ComponentFixture<FinesDeberesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinesDeberesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinesDeberesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
