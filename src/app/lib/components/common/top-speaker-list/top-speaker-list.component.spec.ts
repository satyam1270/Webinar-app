import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSpeakerListComponent } from './top-speaker-list.component';

describe('TopSpeakerListComponent', () => {
  let component: TopSpeakerListComponent;
  let fixture: ComponentFixture<TopSpeakerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TopSpeakerListComponent]
    });
    fixture = TestBed.createComponent(TopSpeakerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
