
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, finalize, Observable, throwError } from "rxjs";
import { LoadingService } from "../service/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    patchRequestIgnore: string[] = [];
    
    constructor(private loadingService: LoadingService) {
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        let request: HttpRequest<any> = req;
        this.loadingService.show();
        return next.handle(request).pipe(
            catchError((error: any) => {
                return throwError(error);
            }),
            finalize(() => {
                this.loadingService.hide();
            })
        );
    }
}