import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingWebinarListComponent } from './upcoming-webinar-list.component';

describe('UpcomingWebinarListComponent', () => {
  let component: UpcomingWebinarListComponent;
  let fixture: ComponentFixture<UpcomingWebinarListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UpcomingWebinarListComponent]
    });
    fixture = TestBed.createComponent(UpcomingWebinarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
