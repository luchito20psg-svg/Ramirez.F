import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cabecera } from './cabecera';

describe('Cabecera', () => {
  let component: cabecera;
  let fixture: ComponentFixture<cabecera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [cabecera],
    }).compileComponents();

    fixture = TestBed.createComponent(cabecera);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
