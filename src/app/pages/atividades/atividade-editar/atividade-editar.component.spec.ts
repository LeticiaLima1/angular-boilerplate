import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeEditarComponent } from './atividade-editar.component';

describe('AtividadeEditarComponent', () => {
  let component: AtividadeEditarComponent;
  let fixture: ComponentFixture<AtividadeEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadeEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
