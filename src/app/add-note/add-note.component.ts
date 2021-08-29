import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../Services/notes.service';
import { FormControl } from '@angular/forms';

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
  message : string = '';

   constructor(private notesService: NotesService) { }

saveNote(): void {
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
