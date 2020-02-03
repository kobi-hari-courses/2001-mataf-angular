import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuditService {
    private history: string[] = [];

    log(message: string) {
        this.history.push(message);
        console.log(this.history);
    }
}