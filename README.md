# groceries-angular-service

## Setup

In order to make the service work you need to add an `HttpModule` to your `@NgModule` imports.

For <b>NativeScript</b> use `NativeScriptHttpModule`

``` javascript
import { NativeScriptHttpModule } from "nativescript-angular/http";
```

``` javascript
@NgModule({
  ...
  imports: [
    ...
    NativeScriptHttpModule
  ],
```

For <b>Web</b> use `HttpModule`

``` javascript
import { HttpModule } from '@angular/http';
```

``` javascript
@NgModule({
  ...
  imports: [
    ...
    NativeScriptHttpModule
  ],
```

### Adding to providers

To provide the `GroceryListService` and `UserService` services, just import them from `groceries-angular-service` and add them to the `@NgModule providers`:

``` javascript
import { GroceryListService, UserService } from 'groceries-angular-service';

@NgModule({
  ...
  providers: [
    ...
    GroceryListService,
    UserService
  ],
```
