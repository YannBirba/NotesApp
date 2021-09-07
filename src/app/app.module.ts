import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TruncatePipe } from './Pipes/truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteComponent,
    LoginComponent,
    NotFoundComponent,
    AddNoteComponent,
    ConfirmDialogComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [NotesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
