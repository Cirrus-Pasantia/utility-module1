import { ReplaySubject, Subject, BehaviorSubject } from 'rxjs';

export const nameSubject$ = new BehaviorSubject<string>('Chelsea');