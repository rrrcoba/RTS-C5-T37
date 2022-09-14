import { Component, OnInit } from '@angular/core';
import { CharsService } from '../chars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.css']
})
export class CharInfoComponent implements OnInit {

  data: any = null;

  id: any = this.route.snapshot.paramMap.get('id');

  constructor(private charsService: CharsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.charsService.returnById(this.id)
    .subscribe(
      result => {
        this.data = result;
      },
      error => {
        console.log('Problems');
      }
    );
  }

}
