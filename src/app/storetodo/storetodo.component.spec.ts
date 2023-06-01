import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoretodoComponent } from './storetodo.component';

describe('StoretodoComponent', () => {
  let component: StoretodoComponent;
  let fixture: ComponentFixture<StoretodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoretodoComponent]
    });
    fixture = TestBed.createComponent(StoretodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
