import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../shared/movie.model'

@Component({
  selector: 'app-seen',
  templateUrl: './seen.component.html',
  styleUrls: ['./seen.component.css']
})
export class SeenComponent implements OnInit {
  seenMovies: MovieModel[] = [
    new MovieModel('Better Off Dead', '*Link to Image of Better Off Dead*'),
    new MovieModel('Say Anything', '*Link to Image of Say Anything*'),
    new MovieModel('Identity','*Link to Image of Identity*')
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.seenMovies)
  }

}
