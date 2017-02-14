import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    template: ` 
                <div class="header">
                    <span class="title"> {{title}} </span>
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
export class HeaderComponent {
    @Input() title: string;
}