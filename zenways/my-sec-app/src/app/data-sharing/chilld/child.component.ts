import { Component , OnInit  , Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector : 'child-app',
    template : `
    <h2>{{"Hello " + name}}</h2>
    <button (click) = "fireEvent()" >Send Event</button>
    `,
    styles :[]
})
export class ChildComponent implements OnInit {

    @Input('parentData') public name;

   @Output() public childEvent = new EventEmitter();

fireEvent(){
    this.childEvent.emit('hey');
}

    constructor(){

    }

    ngOnInit(){

    }
}