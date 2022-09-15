import { Component, OnInit } from '@angular/core';
import { CharsService } from '../chars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  chars:any = null;

  constructor(private charsService: CharsService) {}

  ngOnInit() {
    this.charsService.getAll()
    .subscribe(
      result => {
        this.chars = result;
      },
      error => {
        console.log('Problems');
      }
    );
  }
}
