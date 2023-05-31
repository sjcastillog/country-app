import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl:string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode( code:string):Observable<Country[]>{
        const url = `${this.apiUrl}/alpha/${code}`
        return this.http.get<Country[]>(url)
        .pipe(
            catchError( error => of ([]))
        )
    }

    searchCapital( term:string ):Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${term}`
        return this.http.get<Country[]>(url)
        .pipe(
            // tag( countries => console.log('Tap1', countries)),
            // map( countries => [])
            catchError( error => of ([]))
        )
    }

    searchCountry( term:string ):Observable<Country[]> {
        const url = `${this.apiUrl}/name/${term}`
        return this.http.get<Country[]>(url)
        .pipe(
            // tag( countries => console.log('Tap1', countries)),
            // map( countries => [])
            catchError( error => of ([]))
        )
    }

    searchRegion( term:string ):Observable<Country[]> {
        const url = `${this.apiUrl}/region/${term}`
        return this.http.get<Country[]>(url)
        .pipe(
            // tag( countries => console.log('Tap1', countries)),
            // map( countries => [])
            catchError( error => of ([]))
        )
    }

}