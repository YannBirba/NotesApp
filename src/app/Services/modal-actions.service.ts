import { Injectable } from '@angular/core';
import { NotesService } from './notes.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor(private notesService : NotesService,private router : Router) { }

  modalAction(modalData: any) {
    switch (modalData.name) {
      case "Suppression d'une note":
        this.deleteNote(modalData);
        break;
        
      default:
        break;
    }
  }


  private deleteNote(modalData: any) {
    this.notesService.delete(modalData.Note.id)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
      // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      // this.router.onSameUrlNavigation = 'reload';
      // this.router.navigate(['/notes']);
  }
}