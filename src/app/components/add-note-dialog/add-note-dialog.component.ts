
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/note.service';
@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.scss']
})
export class AddNoteDialogComponent implements OnInit {
    addData=new FormGroup({
      title:new FormControl(''),
      note: new FormControl('')
    })
   
  constructor(private noteService: NoteService,private router: Router) { }
    
  ngOnInit(): void {
  
  }

  saveNote(){
    console.log("object: ",this.addData.value)
    this.noteService.saveAllData(this.addData.value);
  }

}