import * as fs from 'fs';

import * as express from 'express';

import {NoteRepository} from "../app/NoteRepository";
import {FileNoteRepository} from "./FileNoteRepository";
import {Fs} from "./Fs";


export const apiApp = express();

const noteRepository: NoteRepository = new FileNoteRepository(fs as Fs);

apiApp.get('/notes', (req: express.Request, res: express.Response) => {
  noteRepository.findAll()
    .subscribe(notes => {
      res.json(notes);
    });
});
