import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PetInterface } from 'src/app/types/pets.interface';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  @Input() pet!: PetInterface;

  @Output() onAddFavorite: EventEmitter<PetInterface> = new EventEmitter();
  @Output() onDeletePet: EventEmitter<PetInterface> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFavorite() {
    this.onAddFavorite.emit();
  }

  onDelete(pet: PetInterface) {
    this.onDeletePet.emit(pet);
  }
}
