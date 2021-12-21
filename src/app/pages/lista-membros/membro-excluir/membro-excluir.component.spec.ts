import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroExcluirComponent } from './membro-excluir.component';

describe('MembroExcluirComponent', () => {
  let component: MembroExcluirComponent;
  let fixture: ComponentFixture<MembroExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembroExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembroExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
