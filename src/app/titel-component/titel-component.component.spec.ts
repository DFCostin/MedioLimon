import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitelComponentComponent } from './titel-component.component';

describe('TitelComponentComponent', () => {
  let component: TitelComponentComponent;
  let fixture: ComponentFixture<TitelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitelComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
