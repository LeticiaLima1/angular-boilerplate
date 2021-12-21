import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasDeAtividadesComponent } from './listas-de-atividades.component';

describe('ListasDeAtividadesComponent', () => {
  let component: ListasDeAtividadesComponent;
  let fixture: ComponentFixture<ListasDeAtividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasDeAtividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasDeAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
