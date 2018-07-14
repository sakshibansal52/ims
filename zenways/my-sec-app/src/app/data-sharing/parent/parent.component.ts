import { Component   , OnInit} from '@angular/core';

@Component({
    selector : 'parent-app',
    templateUrl : './parent.component.html' ,
})
export class ParentComponent implements OnInit{
     public title :'app';

    public name = "Sakshi Bansal";
    public message = " ";
    constructor(){

    }
    ngOnInit(){
        
    }
}