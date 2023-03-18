import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import { PieChartService } from './pie-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  canvas: any;
  ctx: any;
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };

  pieChart: any;
  pieChartData: any;
  
  constructor(private pcService: PieChartService) { }
  ngOnInit(): void {
    this.getPieChartData();
  }

  getPieChartData(){
    this.pcService.getPieChartData().subscribe(res => {
      console.log(res);
      if(res){
        this.pieChartData = res[0];
        this.pieChartBrowser();
      }
    })
  }

  pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ['Apple', 'Google', 'Facebook', 'Infosys', 'Hp', 'Accenture'],
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#95a5a6',
              '#9b59b6',
              '#f1c40f',
              '#e74c3c',
            ],
            data: [this.pieChartData.Apple, this.pieChartData.Google, this.pieChartData.Facebook, this.pieChartData.Infosys, this.pieChartData.Hp, this.pieChartData.Accenture],
          },
        ],
      },
    });
  }

}
