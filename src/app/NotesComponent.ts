import {Component, Inject, OnInit, NgZone} from "@angular/core";
import {Note} from "./Note";
import {NoteRepositoryToken, NoteRepository} from "./NoteRepository";


@Component({
  selector: 'n-notes',
  template: `
    <div (click)="addNote()">Add note</div>
    <ul>
      <li *ngFor="let note of notes">{{ note.title }} {{ note.content }}</li>
    </ul>
  `
})
export class NotesComponent implements OnInit {
  private notes: Note[] = [];
  private noteRepository: NoteRepository;

  constructor (@Inject(NoteRepositoryToken) noteRepository: NoteRepository, ngZone: NgZone) {
    this.noteRepository = noteRepository;

    ngZone.run(() => {
      this.noteRepository.findAll()
        .subscribe(notes => {
          this.notes = notes;
          console.log('notes');
          console.log(notes);
        }, err => {
          console.log('error');
          console.log(err);
        });
    })

  }

  ngOnInit(): void {

  }

  addNote () {

  }
}
