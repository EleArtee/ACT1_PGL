import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TtgameUpdatePage } from './ttgame-update.page';

describe('TtgameUpdatePage', () => {
  let component: TtgameUpdatePage;
  let fixture: ComponentFixture<TtgameUpdatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TtgameUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
