import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsModalComponent } from './mods-modal.component';

describe('ModsModalComponent', () => {
  let component: ModsModalComponent;
  let fixture: ComponentFixture<ModsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
