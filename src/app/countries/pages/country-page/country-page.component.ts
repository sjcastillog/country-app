import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})

export class CountryPageComponent implements OnInit {

  public country!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ){}


  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( ({id}) => {

        this.countriesService.searchCapital(id)
        .subscribe( country =>{
          this.country = country[0];
        })

    })
   }
 

}
