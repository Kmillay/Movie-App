import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../shared/movie.model'

@Component({
  selector: 'app-need-to-watch',
  templateUrl: './need-to-watch.component.html',
  styleUrls: ['./need-to-watch.component.css']
})
export class NeedToWatchComponent implements OnInit {
  needtowatch: MovieModel[] = [
    new MovieModel('Some Comedy', 'Some URL'),
    new MovieModel('Some Drama', 'Some URL')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
