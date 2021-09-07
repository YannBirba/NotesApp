import { Injectable } from '@angular/core';
import { NotesService } from './notes.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor(private notesService : NotesService,private router : Router,  private notif: MatSnackBar) { }

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
        this.openNotif(
          "La note a bien été supprimée",
          'Ok',
          5000
        );
        this.router.navigate(['/notes'])
      },
      error => {
        console.log(error);
        this.openNotif(
          "Erreur lors de la suppression de la note",
          'Ok',
          5000
        );
      });
  }
  
  openNotif(message: string, action: string, durationTime: number) {
    this.notif.open(message, action, {
      duration: durationTime,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
}