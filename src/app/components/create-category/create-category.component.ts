import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  styleUrls: ['./create-category.component.scss'],
  templateUrl: './create-category.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryComponent {

  constructor(private _categoryService: CategoryService, private _router: Router) {
  }  

  //get form
  readonly form: FormGroup = new FormGroup({ 
    name: new FormControl() });

    //create category
  onFormSubmitted(form: FormGroup): void {
      this._categoryService.create({
        name: form.get('name')?.value,//come back to page
      }).subscribe(() => this._router.navigate(['']));
  }
    
}
