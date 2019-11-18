import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListViewComponent } from './component/list-view/list-view.component';
import { AddnewDialogComponent } from './component/addnew-dialog/addnew-dialog.component';
import { HeaderComponent } from './component/header/header.component';

//angular material 
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';
import { MatSelectModule } from '@angular/material/select';

//flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListFilterComponent } from './component/list-filter/list-filter.component';

const materialModules = [
  MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatTreeModule,
    MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListViewComponent,
    AddnewDialogComponent,
    HeaderComponent,
    ListFilterComponent
  ],
    imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
    FlexLayoutModule,
    materialModules,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
    providers: [],
    entryComponents: [AddnewDialogComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
