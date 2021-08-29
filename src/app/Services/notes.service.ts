import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
const baseUrl = 'http://localhost:8000/api/note';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(baseUrl);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {

    return this.http.post(baseUrl, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  search(title: string): Observable<Note[]> {
    console.log(title);
    
    return this.http.get<Note[]>(`${baseUrl}?title=${title}`);
  }
}
