import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-update-res',
  templateUrl: './update-res.component.html',
  styleUrl: './update-res.component.css'
})
export class UpdateResComponent  implements OnInit{
id: any;
listsugg:Residence=new Residence()


  suggform!: FormGroup;
  constructor(
    private suggservice: ResidenceService,
    private router: Router,
    private act: ActivatedRoute,
  ) {}
ngOnInit(): void {
  this.id = this.act.snapshot.params['id'];
  this.suggform = new FormGroup({
       name: new FormControl('',[Validators.required, Validators.pattern('^[A-Z][A-Za-z]*$')]),
      address: new FormControl('', [Validators.required,Validators.minLength(10)]),
      image: new FormControl('', Validators.required),
      status: new FormControl(''),
  date: new FormControl({value: new Date(), disabled: true}),
    });
    
    // Fetch suggestion data and prefill the form
    this.suggservice.getres(this.id).subscribe({
      next: (data: any) => {
        console.log('Fetched suggestion data:', data);
        this.listsugg = data;
        
        this.suggform.patchValue({
          name: this.listsugg.name,
          adress: this.listsugg.address,
          date: this.listsugg.date,
          status: this.listsugg.status
        });
        
        console.log('Form prefill completed');
      },
      error: (error) => {
        console.error('Error fetching suggestion:', error);
      }
    });
  }
  get description() {
    return this.suggform.get('description');
  }

  update() {
    this.suggservice.updateres(this.id, this.suggform.value).subscribe(() => {
      console.log('updated');

      this.router.navigate(['/list']);
    });
  }
}

