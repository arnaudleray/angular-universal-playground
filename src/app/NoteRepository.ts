import {Observable} from "rxjs";

import {Note} from "./Note";
import {OpaqueToken} from "@angular/core";


export interface NoteRepository {
  findAll(): Observable<Note[]>;
}

export const NoteRepositoryToken = new OpaqueToken('NoteRepositoryToken');
