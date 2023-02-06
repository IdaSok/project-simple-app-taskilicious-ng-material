import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { CategoryComponentModule } from './components/category/category.component-module';
import { CreateCategoryComponentModule } from './components/create-category/create-category.component-module';
import { CategoryEditComponentModule } from './components/category-edit/category-edit.component-module';
import { CategoryDetailComponentModule } from './components/category-detail/category-detail.component-module';
import { TaskFormComponentModule } from './components/task-form/task-form.component-module';
import { EditTaskComponentModule } from './components/edit-task/edit-task.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ 
    path: '', component: CategoryComponent }, { 
      path: 'categories/create', component: CreateCategoryComponent }, { 
        path: 'categories/edit/:id', component: CategoryEditComponent }, { 
          path: 'categories/:id', component: CategoryDetailComponent }, { 
            path: 'tasks/create', component: TaskFormComponent }, { 
              path: 'tasks/edit/:id', component: EditTaskComponent }]), CategoryComponentModule, CreateCategoryComponentModule, CategoryEditComponentModule, CategoryDetailComponentModule, TaskFormComponentModule, EditTaskComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
