import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})


    export class TestService
    {

        name:string  = "ali";

        printName()
        {
            window.alert(this.name)
        }
    }