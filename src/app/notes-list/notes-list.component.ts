import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../Services/notes.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TruncatePipe } from '../Pipes/truncate.pipe';

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
  SearchForm = new FormControl();
  showDelay = new FormControl(1000);
  constructor(private notesService: NotesService, private router: Router,public matDialog: MatDialog) {}

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
  deleteNote(currentNote: Note): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "confirm-dialog-component";
    dialogConfig.height = "200px";
    dialogConfig.width = "350px";
    dialogConfig.data = {
      name: "Suppression d'une note",
      title: "Suppression d'une note",
      description: "Si vous continuer la note : \"" + currentNote.title + "\" va être supprimée",
      actionButtonText: "Supprimer",
      Note: currentNote
    }
    const modalDialog = this.matDialog.open(ConfirmDialogComponent, dialogConfig);
  }
}
