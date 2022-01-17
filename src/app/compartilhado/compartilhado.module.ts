import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { IncPipe } from './pipes/inc/inc.pipe';
import { ObfsEmailPipe } from './pipes/obfs-email/obfs-email.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FilterPipe,
    IncPipe,
    ObfsEmailPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    FilterPipe,
    IncPipe,
    ObfsEmailPipe,
  ]
})
export class CompartilhadoModule { }
