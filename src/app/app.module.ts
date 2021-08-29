import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteComponent } from './note/note.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotesService } from './Services/notes.service';
import { FormsModule } from '@angular/forms';
import { AddNoteComponent } from './add-note/add-note.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteComponent,
    LoginComponent,
    NotFoundComponent,
    AddNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
