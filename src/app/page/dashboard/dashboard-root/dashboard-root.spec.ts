import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRoot } from './dashboard-root';

describe('DashboardRoot', () => {
  let component: DashboardRoot;
  let fixture: ComponentFixture<DashboardRoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardRoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRoot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
