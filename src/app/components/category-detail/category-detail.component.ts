import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { TaskService } from 'src/app/services/task.service';
import { CategoryModel } from '../../models/category.model';
import { TaskModel } from '../../models/task.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-detail',
  styleUrls: ['./category-detail.component.scss'],
  templateUrl: './category-detail.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryDetailComponent {

//get category
  readonly category$: Observable<CategoryModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._categoryService.getOne(data['id'])))
// get the tasks and filter by categoryId
  readonly tasks$: Observable<TaskModel[]> = combineLatest([
    this._taskService.getAllTasks(),
    this._activatedRoute.params])
    .pipe(
    map(([tasksList, params]: [TaskModel[], Params]) => {
      return tasksList.filter(((task: TaskModel) => task.categoryId === params['id']))
    })
  );

constructor(private _categoryService: CategoryService, private _activatedRoute: ActivatedRoute, private _taskService: TaskService) {
  }

//refresh tasks after delete
 private _refreshedTaskSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refreshedTasks$: Observable<TaskModel[]> = this._refreshedTaskSubject.asObservable()
  .pipe(
    switchMap(() => this.tasks$)
  );

//delete task
onButtonRemoved(id:string) {
 this._taskService.deleteTask(id)//refresh the page
 .subscribe(() => this._refreshedTaskSubject.next());
}

}
