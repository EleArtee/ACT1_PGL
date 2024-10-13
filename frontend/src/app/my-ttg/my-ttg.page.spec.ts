import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyTtgPage } from './my-ttg.page';

describe('MyTtgPage', () => {
  let component: MyTtgPage;
  let fixture: ComponentFixture<MyTtgPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTtgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
