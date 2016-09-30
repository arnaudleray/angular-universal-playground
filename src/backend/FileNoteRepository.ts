import * as path from 'path';

import {Observable, Subject} from "rxjs";

import {NoteRepository} from "../app/NoteRepository";
import {Note} from "../app/Note";
import {Fs} from "./Fs";

export class FileNoteRepository implements NoteRepository {
  private notesPath: string = path.join(__dirname, '../../notes.json');

  constructor (private fs: Fs) {
    if (!this.fs.existsSync(this.notesPath)) {
      this.fs.writeFileSync(this.notesPath, JSON.stringify([]));
    }
  }

  findAll(): Observable<Note[]> {
    const output$ = new Subject<Note[]>();

    this.fs.readFile(this.notesPath, (err, data) => {
        if (err) {
          output$.error(err);
        } else {
          output$.next(JSON.parse(data.toString()));
        }

        output$.complete();
    });

    return output$;
  }
}
