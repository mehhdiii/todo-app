import { Injectable } from '@angular/core';
import { Note, NOTES } from 'src/NOTES';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
const headers = { 'Access-Control-Allow-Origin': '*'};

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor(private http: HttpClient) { 

  }


  addNote(note: Note){
    try{
      this.http.post('http://localhost:3000/api/todoNote/add', {
        note: note
      }).subscribe(); 

    }
    catch(error){
      console.log("Error occured in NotesService/addNote", error); 
    }
  }

  updateCompleteStatus(noteId: number, noteStatus: boolean){
    try{
      this.http.patch(`http://localhost:3000/api/todoNote/${noteId}`, {
        isCompleted: noteStatus
      }).subscribe(); 
    }
    catch(error){
      console.log("Error occured in notes-service/updateCompleteStatus")
    }
    // console.log("Verification that isComplete status is updated:\n ", NOTES)
  }

  getNotes(): Observable<any>{
    var res: any = []; 
    try{
      return this.http.get('http://localhost:3000/api/todoNotes')
      // .subscribe(
      //   (response: any) => {

      //     console.log("response", response);
      //     res = response.map((x: any)=> {
      //       return {
      //         Id: x.id, 
      //         title: x.title, 
      //         text: x.description, 
      //         isCompleted: x.isCompleted
      //       }
      //     }); 
      //     console.log('res//', res)
      //     return res; 
           
      //   }, (error) => {
      //     console.log("Error occured in notesService/getNotes: ", error)
      //   }
      // )
    }
    catch(error){
      console.log("error occured in NotesService/getNotes", error)
    }
    console.log('res return', res)
    return res; 
    
  }

}
