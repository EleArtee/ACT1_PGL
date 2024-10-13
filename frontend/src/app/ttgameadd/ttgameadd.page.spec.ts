import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TtgameaddPage } from './ttgameadd.page';

describe('TtgameaddPage', () => {
  let component: TtgameaddPage;
  let fixture: ComponentFixture<TtgameaddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TtgameaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
