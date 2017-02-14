import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'footer',
    template: ` 
                <div class="header">
                    <button class="btn btn-default"><i class="fa fa-twitter-square"></i></button>
                </div>

    `,
    styles:[`
    span{
        
    }
    .title{
        font-size:25px;
    }
    `
    ]
})
export class FooterComponent {
    @Input() copyrightAuthor: string;
}