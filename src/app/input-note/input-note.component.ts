import { Component } from '@angular/core';
import { NotesServiceService } from '../notes-service.service';
import { Note } from 'src/NOTES';

@Component({
  selector: 'app-input-note',
  templateUrl: './input-note.component.html',
  styleUrls: ['./input-note.component.css']
})
export class InputNoteComponent {


  noteContent: string; 
  constructor(private notesService: NotesServiceService){
    this.noteContent = ''; 
  }


  saveNote(){
    if (this.noteContent && this.noteContent!=""){
      var note: Note = {
        Id: Math.floor(Math.random()*100), 
        title: "A new note", 
        text: this.noteContent, 
        isCompleted: false
      }
      // console.log("note: ", note);
      this.notesService.addNote(note);
    }
  }


}
