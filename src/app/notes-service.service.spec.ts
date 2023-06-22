import { TestBed } from '@angular/core/testing';

import { NotesServiceService } from './notes-service.service';
// import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
describe('NotesServiceService', () => {
  let service: NotesServiceService;
  let httpMock: HttpTestingController; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [NotesServiceService]
    });
    service = TestBed.inject(NotesServiceService);
    httpMock = TestBed.inject(HttpTestingController)

  });

  afterEach(()=>{
    httpMock.verify(); 
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct value', async () => {
    service.getNotes().subscribe(res => {
      console.log('what she replied', res); 
      expect(Array.isArray(res)).toBe(true);  
    }); 
    const req = httpMock.expectOne('http://localhost:3000/api/todoNotes');
    expect(req.request.method).toBe('GET');
    
  })
});
