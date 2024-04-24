import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../services/investor.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investor-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investor-table.component.html',
  styleUrl: './investor-table.component.css'
})
export class InvestorTableComponent implements OnInit {

  investors: any[]=[];

  constructor(private investorService: InvestorService, private router: Router) {}

  ngOnInit(): void {
    this.investorService.getInvestors().subscribe((data:any) => {
      this.investors = data;
    });
  }

  goToInvestor(firmId: number) {
    this.router.navigate([`/investors/${firmId}`]);
  }

}
