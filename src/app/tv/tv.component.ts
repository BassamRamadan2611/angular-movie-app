import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  trendingTvs= [];

  constructor(private _MovieService:MovieService) {


    

      _MovieService.getTrendingTv().subscribe( (data) => {
        this.trendingTvs= data.items;
      } )
   }
  ngOnInit() {
  }

}
