import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../Services/notes.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];
  results: Note[] = [];
  public searchInput: string = '';
  changeCount: number = 0;
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.retrieveNotes();
  }
  retrieveNotes(): void {
    this.notesService.getAll().subscribe(
      (data) => {
        this.notes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  retrieveResults(): void{
    console.log(this.searchInput);
    if (this.searchInput != null || this.searchInput != '') {
      this.notesService.search(this.searchInput).subscribe(
        data => {
          let dataTab: any = data;
          this.results = dataTab["data"];
          console.log(dataTab);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
