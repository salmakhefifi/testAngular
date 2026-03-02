import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-add-res',
  templateUrl: './add-res.component.html',
  styleUrl: './add-res.component.css'
})
export class AddResComponent {
 suggform!: FormGroup;
constructor(private suggservice:ResidenceService,private router:Router){}
  ngOnInit(): void {
    this.suggform = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.maxLength(10), Validators.pattern('^[A-Z][A-Za-z]*$')]),
      address: new FormControl('', [Validators.required,Validators.minLength(5)]),
      image: new FormControl('', Validators.required),
      status: new FormControl(''),
  date: new FormControl({value: new Date(), disabled: true}),
    });
  }
  get description(){
    return this.suggform?.get('address');
  }
  add(): void {
    this.suggservice.Createres(this.suggform.value).subscribe(()=>{
      this.router.navigate(['/list'])
      console.log('added!!!')
    })
    console.log(this.suggform.value);  

}
}
