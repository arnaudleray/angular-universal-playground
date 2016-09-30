import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {NoteRepository} from "./NoteRepository";
import {Note} from "./Note";


@Injectable()
export class HttpNoteRepository implements NoteRepository {
  constructor (private http: Http) {
  }


  findAll(): Observable<Note[]> {
    return this.http.get('/api/notes')
      .map(res => res.json());
  }
}
