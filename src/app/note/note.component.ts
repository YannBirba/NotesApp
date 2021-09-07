import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../models/note';
import { NotesService } from '../Services/notes.service';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig  } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

   constructor(
     private notesService: NotesService,
     private route: ActivatedRoute,
     private router: Router,
     public matDialog: MatDialog,
     private notif: MatSnackBar
   ) { }

  ngOnInit(): void {
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

     this.notesService.update(this.currentNote.id, this.currentNote)
       .subscribe(
         response => {
           console.log(response);
           this.openNotif(
            "La note a bien été modifiée",
            'Ok',
            5000
           );
           this.router.navigate(['/notes'])
         },
         error => {
           console.log(error);
           this.openNotif(
            "Erreur lors de la modification de la note",
            'Ok',
            5000
          );
         });
   }
   deleteNote(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "confirm-dialog-component";
    dialogConfig.height = "200px";
    dialogConfig.width = "350px";
    dialogConfig.data = {
      name: "Suppression d'une note",
      title: "Suppression d'une note",
      description: "Si vous continuer la note : \"" + this.currentNote.title + "\" va être supprimée",
      actionButtonText: "Supprimer",
      Note: this.currentNote
    }
    const modalDialog = this.matDialog.open(ConfirmDialogComponent, dialogConfig);
   }
  
   openNotif(message: string, action: string, durationTime: number) {
    this.notif.open(message, action, {
      duration: durationTime,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
}
