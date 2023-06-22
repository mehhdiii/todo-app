import { Component } from '@angular/core';
import { NOTES, Note } from 'src/NOTES';
import { NotesServiceService } from '../notes-service.service';
@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {

  // notes = NOTES; 
  notes: Note[] = [];

  constructor(private notesService: NotesServiceService){
    console.log('home-screen initializing')
    this.notesService.getNotes().subscribe(
      (resp: any) => {
        this.notes = 
          resp.map((x: any) => {
            return {
                  Id: x.id,
                  title: x.title,
                  text: x.description,
                  isCompleted: x.isCompleted
            }
        })
        console.log("this.notes", this.notes); 
      }
    )
  }



}
