import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RepositServiceService } from './reposit-service.service';
  declare var bootstrap: any; 
@Component({
  selector: 'app-reposit',
  templateUrl: './reposit.component.html',
  styleUrls: ['./reposit.component.scss']
})
export class RepositComponent {
  listForm!: FormGroup;
  showError!: boolean;
  loopStage: any = [];
  emptyVal: any;

  constructor(private fb: FormBuilder, private http:RepositServiceService){
    this.listForm = this.fb.group({
      name: ['', Validators.required],
      options: this.fb.array([]),
    });
  }
  get getOptions() {
    return this.listForm.get('options') as FormArray;
  }
  newOption(): FormGroup {
    return this.fb.group({
      stages: ['', Validators.required],
    });
  }
  addInput() {
    this.getOptions.push(this.newOption());
  }
  removeInput(idx: number) {
    this.getOptions.removeAt(idx);
  }
  savecreatemodal() {
    if (this.getOptions.length != 0) {
      console.log('hi');
      const modalElement = document.getElementById('exampleModal');
      const modal = bootstrap.Modal.getInstance(modalElement); // Get the modal instance
      modal.hide(); // Hide the modal
      this.emptyVal = this.listForm.value.options;
      this.emptyVal.forEach((el:any) => {
        this.loopStage.push(el.stages);
      });
      const obj = {
        FolderName: this.listForm.value.name,
        stages: this.loopStage,
      };
      this.http.post(obj).subscribe((x)=>{
        console.log(x,obj,'done');
        
      })
      this.listForm.reset()
    }else{
      this.showError = true;
    }
    
  }
  cancelcreatemodal() {
    const clr = this.listForm.get('options') as FormArray;
    clr.clear();
    this.listForm.reset()
  }
  
  }


