import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { doctors } from './top-speaker-list.component.mock.data';

@Component({
  selector: 'app-top-speaker-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-speaker-list.component.html',
  styleUrls: ['./top-speaker-list.component.css']
})
export class TopSpeakerListComponent implements OnInit {
 public doctors: any;

 ngOnInit(): void {
   this.doctors = doctors
 }
}
