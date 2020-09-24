import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, mergeMap, retryWhen ,switchMap} from 'rxjs/operators';

const getErrorMessage = (maxRetry: number) => ` try again ${maxRetry}`
const DEFAULT_MAX_RETRIES = 2;
const DEFAULT_BACKOFF = 1000;
export function retryWithBackoff(delayMs: number, maxRetry = DEFAULT_MAX_RETRIES, backoffMs = DEFAULT_BACKOFF) {
  let retries = maxRetry;
  return (src: Observable<any>) =>
    src.pipe(
      retryWhen((errors: Observable<any>) => errors.pipe(
        mergeMap(error => {
          if (retries-- > 0) {
            const backoffTime = delayMs + (maxRetry - retries) * backoffMs;
            return of(error).pipe(delay(backoffTime));
          }
          return throwError(getErrorMessage(maxRetry))
        })
      )
      ));
}

@Injectable({
  providedIn: 'root'
})
export class RetryService {

  constructor(public httpClient: HttpClient) { }

  getUserData() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/-1').pipe(
      retryWithBackoff(15000),
      catchError(this.handleError))
  }
  handleError(error) {
    return throwError(error);
  }
}
