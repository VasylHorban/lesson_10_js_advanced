import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { BtnsComponent } from './btns/btns.component';
import { EditComponent } from './edit/edit.component';
import { StylizationComponent } from './stylization/stylization.component';
import { CreateTableListComponent } from './create-table-list/create-table-list.component';
import { BlockedComponent } from './blocked/blocked.component';
import { SanitizePipe } from './sanitize.pipe';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    BtnsComponent,
    EditComponent,
    StylizationComponent,
    CreateTableListComponent,
    BlockedComponent,
    SanitizePipe,
    ExampleComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
