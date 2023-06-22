import { Component, Input } from '@angular/core';
import { NoteCardComponent } from '../note-card/note-card.component';
import { Note } from 'src/NOTES';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {

  @Input()
  notes: Note[] = []; 

  constructor(){

  }
  setNotes(notes: Note[]){
    this.notes = notes; 
  }



}
