import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../Services/notes.service';
import { FormControl, NgForm } from '@angular/forms';

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
  submitted : boolean = false;
  message: string = '';
  public isFormValid: boolean = false;

   constructor(private notesService: NotesService) { }

   onSubmit(form: NgForm) {
    const data = {
      title: this.currentNote.title,
      content: this.currentNote.content
    };
    
    this.notesService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

newNote(): void {
    this.submitted = false;
    this.currentNote = {
      id : '',
      title: '',
      content: '',
    };
  }
}