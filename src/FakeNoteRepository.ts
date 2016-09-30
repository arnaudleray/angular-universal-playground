import {NoteRepository} from "./app/NoteRepository";
import {Observable} from "rxjs";
import {Note} from "./app/Note";
import {EventEmitter} from "@angular/core";


export class FakeNoteRepository implements NoteRepository {

  findAll(): Observable<Note[]> {
    const output$ = new EventEmitter<Note[]>();

    setTimeout(() => {
      output$.emit([
        {id: '1', title: 'AAA', content: 'bbb'}
      ]);

      output$.complete();
    });

    return output$;
  }
}
