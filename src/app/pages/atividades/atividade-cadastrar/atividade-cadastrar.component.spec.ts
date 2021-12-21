import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeCadastrarComponent } from './atividade-cadastrar.component';

describe('AtividadeCadastrarComponent', () => {
  let component: AtividadeCadastrarComponent;
  let fixture: ComponentFixture<AtividadeCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtividadeCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
