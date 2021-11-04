import { Component, OnInit } from '@angular/core';
import { PetInterface } from 'src/app/types/pets.interface';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  pets: PetInterface[] = [];

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.getPets().subscribe((pets) => (this.pets = pets));
  }

  addFavorite(pet: PetInterface) {
    console.log(pet.favorite);
    pet.favorite = !pet.favorite;
    this.petService.updatePetFavorite(pet).subscribe();
  }

  deletePet(pet: PetInterface) {
    this.petService
      .deletePet(pet)
      .subscribe(
        () => (this.pets = this.pets.filter((item) => item.id !== pet.id))
      );
  }

  addPet(pet: PetInterface) {
    if (pet.breed && pet.description) {
      this.petService.addPet(pet).subscribe((pet) => this.pets.push(pet));
    }
  }
}
