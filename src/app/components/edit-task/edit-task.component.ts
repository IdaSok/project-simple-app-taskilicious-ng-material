import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, take, tap } from 'rxjs';
import { TaskModel } from 'src/app/models/task.model';
import { CategoryModel } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-edit-task',
  styleUrls: ['./edit-task.component.scss'],
  templateUrl: './edit-task.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTaskComponent {

  //get form
  readonly form: FormGroup = new FormGroup({
    name: new FormControl(),
    categoryId: new FormControl()
  });

  //get categories
  readonly category$: Observable<CategoryModel[]> = this._categoryService.getAll();
  
  //get task and patch form with data
  readonly task$: Observable<TaskModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._categoryService.getOneTask(data['id'])),
    take(1),
    tap((data: TaskModel) => this.form.patchValue(data)));


  constructor(private _categoryService: CategoryService, private _router: Router, private _activatedRoute: ActivatedRoute,) {
    this.task$.subscribe()
  }

  // edit task
  onFormSubmitted(form: FormGroup): void {
    this._activatedRoute.params
    .pipe(
      take(1),
        switchMap((data) =>
            this._categoryService.editTask({
              id:data['id'],
              ...form.value,}))//come back to page
    ).subscribe(() => this._router.navigate(['categories/' + this.form.get('categoryId')?.value]))};
  }

