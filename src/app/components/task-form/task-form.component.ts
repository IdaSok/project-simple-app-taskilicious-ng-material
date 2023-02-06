import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { CategoryModel } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-task-form',
  styleUrls: ['./task-form.component.scss'],
  templateUrl: './task-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormComponent {

  //get form
  readonly form: FormGroup = new FormGroup({ 
    name: new FormControl(), 
    categoryId: new FormControl()
  });
//get categories
  readonly category$: Observable<CategoryModel[]> = this._categoryService.getAll();
    
  constructor(private _categoryService: CategoryService, private _router: Router, private _taskService: TaskService) {
  }
//create task
    onFormSubmitted(form: FormGroup): void {
      this._taskService.createTask({
        name: form.get('name')?.value,
        categoryId: form.get('categoryId')?.value,
        id: form.get('id')?.value,//come back to page
  }).subscribe(() => this._router.navigate(['categories/' + this.form.get('categoryId')?.value]) )
}
}
