import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
  
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private requestCount: number = 0;

    isLoading$ = this.loadingSubject.asObservable();

    show() {
        this.requestCount++;
        this.loadingSubject.next(true);
    }

    hide() {
        this.requestCount--;
        if (this.requestCount === 0) {
            this.loadingSubject.next(false);
        }
    }
}
