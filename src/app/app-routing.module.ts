import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteComponent } from './note/note.component';
import { NotesListComponent } from './notes-list/notes-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes',pathMatch: 'full' },
  { path: 'notes', component: NotesListComponent },
  { path: 'note/:id', component: NoteComponent },
  { path: 'add-note', component: AddNoteComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/404' ,pathMatch: 'full' }
];
/*canActivate: [AuthGuard] */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
