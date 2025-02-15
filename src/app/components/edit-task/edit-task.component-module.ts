import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EditTaskComponent } from './edit-task.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule,MatSelectModule],
  declarations: [EditTaskComponent],
  providers: [],
  exports: [EditTaskComponent]
})
export class EditTaskComponentModule {
}
