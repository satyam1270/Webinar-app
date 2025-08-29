import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { filters, webinarMayLikeList } from './webinar-you-may-like.mock';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
import { CardComponentComponent } from '../card-component/card-component.component';

@Component({
  selector: 'app-webinar-you-may-like',
  standalone: true,
  imports: [CommonModule, FilterPipe, FormsModule, CardComponentComponent],
  templateUrl: './webinar-you-may-like.component.html',
  styleUrls: ['./webinar-you-may-like.component.css']
})
export class WebinarYouMayLikeComponent implements OnInit {
  public filters: any;
  public webinarMayLikeList: any;
  public searchTerm: string = '';

  ngOnInit(): void {
    this.filters = filters;
    this.webinarMayLikeList = webinarMayLikeList
  }
}
