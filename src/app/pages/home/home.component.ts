import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowseTopicListComponent } from '@lib/components/common/browse-topic-list/browse-topic-list.component';
import { LiveWebinarListComponent } from '@lib/components/common/live-webinar-list/live-webinar-list.component';
import { TopSpeakerListComponent } from '@lib/components/common/top-speaker-list/top-speaker-list.component';
import { UpcomingWebinarListComponent } from '@lib/components/common/upcoming-webinar-list/upcoming-webinar-list.component';
import { WebinarCardialogyComponent } from '@lib/components/common/webinar-cardialogy/webinar-cardialogy.component';
import { WebinarYouMayLikeComponent } from '@lib/components/common/webinar-you-may-like/webinar-you-may-like.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, LiveWebinarListComponent, UpcomingWebinarListComponent, HomeComponent, WebinarCardialogyComponent, TopSpeakerListComponent, BrowseTopicListComponent, WebinarYouMayLikeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedTab = 0;

  tabs = [
    { label: 'For you', content: 'Content for For you' },
    { label: 'Live', content: 'Content for Live' },
    { label: 'Upcoming', content: 'Content for Upcoming' },
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
