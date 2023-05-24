import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditCardComponent } from './reddit-card.component';

describe('RedditCardComponent', () => {
  let component: RedditCardComponent;
  let fixture: ComponentFixture<RedditCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedditCardComponent]
    });
    fixture = TestBed.createComponent(RedditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
