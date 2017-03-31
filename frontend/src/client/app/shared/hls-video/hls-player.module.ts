import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlsPlayerComponent } from './hls-player.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HlsPlayerComponent],
    exports: [HlsPlayerComponent],
    providers: []
})
export class HlsPlayerModule { }
