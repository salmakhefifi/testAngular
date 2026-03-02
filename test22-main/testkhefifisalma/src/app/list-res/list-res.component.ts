import { Component } from '@angular/core';
import { Residence } from '../models/residence';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-list-res',
  templateUrl: './list-res.component.html',
  styleUrl: './list-res.component.css'
})
export class ListResComponent {
  Residences: Residence[] = [{
    id: 1,
    name: 'Residence A',
    address: 'adress A',
    image: '',
    status: '',
    date: new Date()
  }];
    search = '';
  constructor(private resservice: ResidenceService) {}
  listsuggdatabase: Residence[] = [];
  ngOnInit(): void {
    this.resservice.getAllres().subscribe({
      next: (data: any) => {
        this.listsuggdatabase = data;
        // If API returns empty data, use hardcoded suggestions as fallback
        if (!this.listsuggdatabase || this.listsuggdatabase.length === 0) {
          this.listsuggdatabase = this.Residences; // Use hardcoded suggestions if API returns empty data
        }
      },
      error: (error) => {
        console.error('Error fetching suggestions:', error);
        // Use hardcoded suggestions if API fails
        this.listsuggdatabase = this.Residences;
      }
    });
  } 

  searchbytitle() {
    if (!this.listsuggdatabase || this.listsuggdatabase.length === 0) {
      return [];
    }
    return this.listsuggdatabase.filter((s) =>
      s.name.toLowerCase().includes(this.search.toLowerCase()),
    );
  }
  deleteres(id: any) {
    console.log('id: ' + id);
    this.resservice.deleteres(id).subscribe(()=>{
console.log('deleted!!!');
this.ngOnInit()
    });
    
  }

}
