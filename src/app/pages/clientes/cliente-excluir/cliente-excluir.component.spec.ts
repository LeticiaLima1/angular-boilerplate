import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteExcluirComponent } from './cliente-excluir.component';


describe('ClienteExcluirComponent', () => {
  let component: ClienteExcluirComponent;
  let fixture: ComponentFixture<ClienteExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
