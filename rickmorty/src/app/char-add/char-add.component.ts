import { Component, OnInit } from '@angular/core';
import { Char } from '../models/char.model';
import { CharsService } from '../chars.service';

@Component({
  selector: 'app-char-add',
  templateUrl: './char-add.component.html',
  styleUrls: ['./char-add.component.css']
})
export class CharAddComponent implements OnInit {

  char: Char = {
    name: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  };

  submitted = false;


  constructor(private charsService: CharsService) { }

  ngOnInit(): void {
  }

  saveChar(): void {
    const data = {
      name: this.char.name,
      status: this.char.status,
      species: this.char.species,
      gender: this.char.gender,
      origin: this.char.origin,
      image: this.char.image
    };

    this.charsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newChar(): void {
    this.submitted = false;
    this.char = {
      name: '',
      species: '',
      gender: '',
      origin: '',
      image: ''
    }
  }
}
