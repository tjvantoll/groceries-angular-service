import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { GroceryListService, UserService } from 'groceries-angular-service';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './item/items.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        ItemsComponent
    ],
    providers: [
        GroceryListService,
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
