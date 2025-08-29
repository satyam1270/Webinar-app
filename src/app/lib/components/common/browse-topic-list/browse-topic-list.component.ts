import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { categories } from './browse-topic-list.component.mock.data';

@Component({
  selector: 'app-browse-topic-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './browse-topic-list.component.html',
  styleUrls: ['./browse-topic-list.component.css']
})
export class BrowseTopicListComponent implements OnInit {
  public categories: any;

  ngOnInit(): void {
    this.categories = categories;
  }
}
