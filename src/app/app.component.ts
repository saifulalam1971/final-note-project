import { Component, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteDialogComponent } from './components/add-note-dialog/add-note-dialog.component';
import { NoteService } from './note.service';
import { Notetype } from '../app/app-note.modal'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Note-Project';
  searchNote: any;
  isSearch = false;
  noteData: any = '';
  allNoteValue: Notetype[] = [];
  constructor(public dialog: MatDialog,
    private noteService: NoteService
    ) { }

  ngOnInit(): void {
    this.allNoteValue=this.noteService.getLocalStroageNoteData();
  }
  addNoteModal() {
    const dialogRef = this.dialog.open(AddNoteDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      if (this.noteData != this.noteService.getAll()) {
        this.noteData = this.noteService.getAll();
        console.log("data from service: ", this.noteService.getAll());
        this.allNoteValue.push(this.noteService.getAll());
        this.noteService.setLocalStroageNoteData(this.allNoteValue);
      }
    });
  }
  deleteNote(noteTitle: string) {
    this.allNoteValue=this.noteService.getLocalStroageNoteData();
    console.log("delete title note : ", noteTitle);
    this.allNoteValue.forEach((element, index) => {
      if (element.title == noteTitle) {
        this.allNoteValue[index].title ='';
        this.allNoteValue[index].note ='';
      }
    });
    this.noteService.setLocalStroageNoteData(this.allNoteValue);
  }
  noteSearch() {
    console.log("search Note: ", this.searchNote);
    if (this.searchNote != '') {
      this.allNoteValue = this.allNoteValue.filter((res) => {
        return res.title.match(this.searchNote);
      });
    } else if (this.searchNote == '') {
      this.allNoteValue=this.noteService.getLocalStroageNoteData();
    }
  }
}
