import { Injectable } from '@angular/core';
import { Student } from './student.module';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { take, map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _students = new BehaviorSubject<Student[]>([
    // tslint:disable-next-line: max-line-length
    new Student(
      'p1',
      'Class 1',
      'THE ANCIENT CITY OF SRI LANKA.'
    ),
    new Student(
      'p2',
      'Class 2',
      'CAVE TEMPLE COMPLEX.'
    ),
    new Student(
      'ptuyi',
      'Class 3',
      'LITTLE ADAMS PEAK.'
    )
  ]);

  get places() {
    return this._students.asObservable();
  }

  constructor(private authService: AuthService) {}

  // getPlace(id: string) {
  //   return this.places.pipe(
  //     take(1),
  //     map(places => {
  //       return { ...places.find(p => p.id === id) };
  //     })
  //   );
  // }

  // addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
  //   console.log('addPlace method called');
  //   const newPlace = new Place(
  //     Math.random().toString(),
  //     title,
  //     description,
  //     'https://www.booknow.lk/images/destinations/negombo.jpg',
  //     price,
  //     dateFrom,
  //     dateTo,
  //     this.authService.userId
  //    );
  //    return this.places.pipe(take(1), delay(1000), tap(places => {
  //       this._places.next(places.concat(newPlace));
  //    })
  //    );
  // }
}
