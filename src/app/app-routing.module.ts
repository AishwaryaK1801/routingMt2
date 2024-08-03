import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { UserComponent } from "./shared/components/user/user.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { UserFormComponent } from "./shared/components/user-form/user-form.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { ProdFormComponent } from "./shared/components/prod-form/prod-form.component";
import { ProductComponent } from "./shared/components/product/product.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";



const routes : Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'users',
        component : UsersComponent
    },
    {
        path : 'users/addUser',
        component : UserFormComponent
    },
    {
        path : 'users/:userId',
        component : UserComponent
    },
    {
        path : 'users/:userId/editUser',
        component : UserFormComponent
    },
    {
        path : 'products',
        component : ProductsComponent
    },
    {
        path : 'products/addProduct',
        component : ProdFormComponent
    },
    {
        path : 'products/:productId',
        component : ProductComponent
    },
    {
        path : 'products/:productId/editProduct',
        component : ProdFormComponent
    },
    {
        path : 'page-not-found',
        component : PageNotFoundComponent
    },
    {
        path : '**',
        redirectTo : 'page-not-found'
    }
]




@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule{

}