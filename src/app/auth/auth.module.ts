import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxLoadingModule } from "ngx-loading";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations:[
        LoginComponent,
        AuthComponent
    ],
    imports:[
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxLoadingModule.forRoot({})
    ]
})

export class AuthModule {}