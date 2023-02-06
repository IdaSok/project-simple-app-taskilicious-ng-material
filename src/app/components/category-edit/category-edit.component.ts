import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, take, tap } from 'rxjs';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-edit',
  styleUrls: ['./category-edit.component.scss'],
  templateUrl: './category-edit.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryEditComponent {

  //get form
  readonly form: FormGroup = new FormGroup({
    name: new FormControl() });
//get category and patch the form with data
  readonly categories$: Observable<CategoryModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._categoryService.getOne(data['id'])),
    take(1),
    tap((data: CategoryModel) => this.form.patchValue(data)));
  
  constructor(private _categoryService: CategoryService , private _activatedRoute: ActivatedRoute, private _router: Router) {
    this.categories$.subscribe()
  }
  //update endpoint
  onFormSubmitted(form: FormGroup) {
    this._activatedRoute.params
        .pipe(
            switchMap((data) =>
                this._categoryService.update({
                  id:data['id'],
                  ...form.value,//come back to page
                }))).subscribe(() => this._router.navigate(['']))}
  
}
