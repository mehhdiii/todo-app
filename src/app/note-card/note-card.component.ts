import { Component, Input } from '@angular/core';
import { Note } from 'src/NOTES';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {

  @Input()
  note: Note = {
    Id: -1, 
    text: '', 
    title: '', 
    isCompleted: false
  };

  constructor(private notesService: NotesServiceService){ 
  }

  toggleComplete(event: Event){
    // var checkbox = document.getElementById("isMarkedCheckBox"); 
    console.log(event)
    console.log("heyyy i came here")
    console.log((<HTMLInputElement>event.target).checked)


    this.notesService.updateCompleteStatus(this.note.Id, (<HTMLInputElement>event.target).checked)
    // this.note.isCompleted = (<HTMLInputElement>event.target).checked; 
    



  }
}
