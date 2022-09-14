import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  //url="http://localhost:3000/posts";
  saveFormData:any;
  constructor(private http:HttpClient) {}
  saveAllData(data:any){
    console.log("save service data: ",data);
    this.saveFormData=data;
    //return this.http.post(this.url,data);
  }
  getAll(){
    //return this.http.get(this.url);
    return this.saveFormData;
  }
  setLocalStroageNoteData(data:any){
    localStorage.setItem("saveData", JSON.stringify(data));
  }
  getLocalStroageNoteData(){
    return JSON.parse(localStorage.getItem('saveData') || '[]');
  }
  deleteUser(id:any){
    //return this.http.delete(`${this.url}/${id}`);
  }
}
