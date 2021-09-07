import { Injectable } from '@angular/core';
import { NotesService } from './notes.service';

@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor(private notesService : NotesService) { }

  modalAction(modalData: any) {
    switch (modalData.name) {
      case "deleteNote":
        this.deleteNote(modalData);
        break;
        
      default:
        break;
    }
  }


  private deleteNote(modalData: any) {
    console.log(modalData);
    // this.notesService.delete(currentNote.id)
    // .subscribe(
    //   response => {
    //     console.log(response);
    //   },
    //   error => {
    //     console.log(error);
    //   });
  }
}