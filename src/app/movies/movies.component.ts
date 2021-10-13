import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovies= [];

  constructor(private _MovieService:MovieService) {


    

      _MovieService.getTrendingMovie().subscribe( (data) => {
        this.trendingMovies= data.items;
      } )
   }

  ngOnInit() {
  }

}
