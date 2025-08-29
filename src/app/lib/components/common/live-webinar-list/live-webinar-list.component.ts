import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { liveWebinarList } from './live-webinar-list.component.mock.data';
import { CardComponentComponent } from '../card-component/card-component.component';
import { WebinarList } from './live-webinar-list.component.data.types';

@Component({
  selector: 'app-live-webinar-list',
  standalone: true,
  imports: [CommonModule, CardComponentComponent],
  templateUrl: './live-webinar-list.component.html',
})
export class LiveWebinarListComponent implements OnInit {
  public liveWebinarList!: WebinarList;

  ngOnInit(): void {
    this.liveWebinarList = liveWebinarList
  }
}
