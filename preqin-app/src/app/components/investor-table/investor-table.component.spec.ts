import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorTableComponent } from './investor-table.component';

describe('InvestorTableComponent', () => {
  let component: InvestorTableComponent;
  let fixture: ComponentFixture<InvestorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestorTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
