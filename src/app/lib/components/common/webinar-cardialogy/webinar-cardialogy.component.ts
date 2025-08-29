import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponentComponent } from '../card-component/card-component.component';
import { webinarCardialogy } from './webinar-cardialogy.mock.data';

@Component({
  selector: 'app-webinar-cardialogy',
  standalone: true,
  imports: [CommonModule, CardComponentComponent],
  templateUrl: './webinar-cardialogy.component.html',
  styleUrls: ['./webinar-cardialogy.component.css']
})
export class WebinarCardialogyComponent implements OnInit {
  public webinarCardialogy : any;
  ngOnInit(): void {
   this.webinarCardialogy = webinarCardialogy;
  }
}
