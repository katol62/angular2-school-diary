import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsComponent} from "./news.component";

@NgModule({
    imports: [CommonModule],
    declarations: [NewsComponent],
    exports: [NewsComponent],
    providers: []
})
export class NewsModule { }
