import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeExcluirComponent } from './atividade-excluir.component';

describe('AtividadeExcluirComponent', () => {
  let component: AtividadeExcluirComponent;
  let fixture: ComponentFixture<AtividadeExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadeExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
