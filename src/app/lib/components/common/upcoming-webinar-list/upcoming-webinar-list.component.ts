import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { upcomingWebinarList } from './upcoming-webinar-list.component.mock.data';
import { CardComponentComponent } from '../card-component/card-component.component';
import { WebinarList } from '../live-webinar-list/live-webinar-list.component.data.types';

@Component({
  selector: 'app-upcoming-webinar-list',
  standalone: true,
  imports: [CommonModule, CardComponentComponent],
  templateUrl: './upcoming-webinar-list.component.html'
})
export class UpcomingWebinarListComponent {
  public upcomingWebinarList!: WebinarList;

  ngOnInit(): void {
    this.upcomingWebinarList = upcomingWebinarList
  }
}
