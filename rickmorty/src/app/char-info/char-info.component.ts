import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharsService } from '../chars.service';
import { Char } from '../models/char.model';

@Component({
  selector: 'app-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.css']
})
export class CharInfoComponent implements OnInit {

  id: any;

  data: Char = {
    name: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }

  constructor(private charsService: CharsService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.charsService.getById(this.id)
    .subscribe(
      result => {
        this.data = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  changeStatus(status: boolean): void {
    const data = {
      name: this.data.name,
      gender: this.data.gender,
      species: this.data.species,
      origin: this.data.origin,
      image: this.data.image,
      status: status
    };

    this.charsService.update(this.data.id, data)
    .subscribe (
      response => {
        this.data.status = status;
        console.log(response);
    },
    error => {
      console.log(error);
    });
  }

  deleteCharacter(): void {
    this.charsService.deleteById(this.data.id)
    .subscribe (
      response => {
        console.log(response);
        this.router.navigate(['/characters']);
    },
    error => {
      console.log(error);
    });
  }
}
