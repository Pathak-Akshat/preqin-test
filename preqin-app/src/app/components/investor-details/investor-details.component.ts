import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvestorService } from '../../services/investor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investor-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investor-details.component.html',
  styleUrl: './investor-details.component.css'
})
export class InvestorDetailsComponent implements OnInit {

  investorId: string | null='';
  commitment: any;

  constructor(
    private route: ActivatedRoute,
    private investorService: InvestorService
  ) {}

  ngOnInit(): void {
    this.investorId = this.route.snapshot.paramMap.get('id');
  }

  getCommitment(assetClass: string) {
    if (assetClass && this.investorId) {
      this.investorService.getInvestorCommitment(assetClass, this.investorId).subscribe((data) => {
        this.commitment = data;
      });
    } else {
      this.commitment = null;
    }
  }
}
