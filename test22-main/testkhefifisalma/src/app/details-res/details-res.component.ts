import { Component, OnInit } from '@angular/core';
import { Residence } from '../models/residence';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-details-res',
  templateUrl: './details-res.component.html',
  styleUrl: './details-res.component.css'
})
export class DetailsResComponent implements OnInit {
  resid!: number;
res: Residence | undefined;
constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private suggservice: ResidenceService
  ) { }
  ngOnInit(): void {
    this.resid = Number(this.route.snapshot.paramMap.get('id'));
     this.suggservice.getres( this.resid).subscribe({
    next: (data: any) => {
        this.res = data;
        console.log('Fetched suggestion details:', this.res);
      },
      error: (error) => {
        console.error('Error fetching suggestion details:', error);
        // Handle case where suggestion is not found
        this.router.navigate(['/list']);
      }
    });}

  backToList() {
    this.router.navigate(['/list']);
  }
}
