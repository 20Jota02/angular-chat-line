import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomForumComponent } from './room-forum.component';

describe('RoomForumComponent', () => {
  let component: RoomForumComponent;
  let fixture: ComponentFixture<RoomForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
