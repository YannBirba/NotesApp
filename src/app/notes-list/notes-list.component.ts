import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../Services/notes.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private notesService: NotesService, private router: Router) {}

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
  retrieveResults(input : string): void{
    this.results = [];
    this.searchInput = input;
    if (this.searchInput != null || this.searchInput != '') {
      this.notesService.search(this.searchInput).subscribe(
        (data) => {
          let dataTab: any = data;
          this.results = dataTab["data"];
          
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
