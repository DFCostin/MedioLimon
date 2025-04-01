import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanTeamComponent } from './human-team.component';

describe('HumanTeamComponent', () => {
  let component: HumanTeamComponent;
  let fixture: ComponentFixture<HumanTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HumanTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
