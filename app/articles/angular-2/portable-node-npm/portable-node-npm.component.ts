import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'portable-node-npm',
    templateUrl: './app/articles/angular-2/portable-node-npm/portable-node-npm.component.html'
})
export class PotableNodeNpmComponent implements OnInit {
    @Output() headerTitle =new EventEmitter<string>();
    title:string;
    constructor() {
        this.title="Configuring portable npm and node";
     }

    ngOnInit() {
            this.headerTitle.emit(this.title);
     }
}