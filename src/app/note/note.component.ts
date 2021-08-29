import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../models/note';
import { NotesService } from '../Services/notes.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  currentNote: Note = {
    id: '',
    title : '',
    content: '',
  };
  message : string = '';

   constructor(
     private notesService: NotesService,
     private route: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
     this.message = '';
     this.getNote(this.route.snapshot.params.id);    
  }

   getNote(id: any): void {
     this.notesService.get(id)
       .subscribe(
         data => {
           this.currentNote = data["data"];
         },
         error => {
           console.log(error);
         });
        
   }

   updateNote(): void {
     this.message = '';

     this.notesService.update(this.currentNote.id, this.currentNote)
       .subscribe(
         response => {
           console.log(response);
           this.message = response.message ? response.message : 'La note a bien été modifiée';
         },
         error => {
           console.log(error);
         });
   }

   deleteNote(): void {
     this.notesService.delete(this.currentNote.id)
       .subscribe(
         response => {
           console.log(response);
           this.router.navigate(['/notes']);
         },
         error => {
           console.log(error);
         });
   }
}
