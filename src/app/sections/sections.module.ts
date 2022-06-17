import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThisComponent } from './this/this.component';
import { IfComponent } from './if/if.component';
import { CourseComponent } from './course/course.component';
import { MethodComponent } from './method/method.component';
import { ConceptComponent } from './concept/concept.component';
import { FormatComponent } from './format/format.component';
import { SummaryComponent } from './summary/summary.component';
import { PriceComponent } from './price/price.component';
import { StartComponent } from './start/start.component';
import { BottomComponent } from './bottom/bottom.component';



@NgModule({
  declarations: [HeaderComponent, ThisComponent, IfComponent, CourseComponent, MethodComponent, ConceptComponent, FormatComponent, SummaryComponent, PriceComponent, StartComponent, BottomComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, ThisComponent, IfComponent, CourseComponent, MethodComponent, ConceptComponent, FormatComponent, SummaryComponent, PriceComponent, StartComponent, BottomComponent]
})
export class SectionsModule { }
