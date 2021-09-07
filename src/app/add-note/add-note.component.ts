import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../Services/notes.service';
import { FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {
  currentNote: Note = {
    id: '',
    title : '',
    content: '',
  };
  message: string = '';
  public isFormValid: boolean = false;

   constructor(private notesService: NotesService,  private notif: MatSnackBar, private router : Router) { }

   onSubmit(form: NgForm) {
    const data = {
      title: this.currentNote.title,
      content: this.currentNote.content

    };
    this.notesService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.openNotif(
            "La note a bien été créée",
            'Ok',
            5000
          );
          this.router.navigate(['/notes'])
        },
        error => {
          console.log(error);
          this.openNotif(
            "Erreur lors de la création de la note",
            'Ok',
            5000
          );
        });
   }
  EnterSubmit(event: any, form: NgForm) {
    if (event.keyCode === 13) {
      this.onSubmit(form);
    }
   }
   openNotif(message: string, action: string, durationTime: number) {
    this.notif.open(message, action, {
      duration: durationTime,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
}