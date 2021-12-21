import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroEditarComponent } from './membro-editar.component';

describe('MembroEditarComponent', () => {
  let component: MembroEditarComponent;
  let fixture: ComponentFixture<MembroEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembroEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembroEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
