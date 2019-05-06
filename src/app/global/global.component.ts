import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

import HighchartsMoreModule from 'highcharts/highcharts-more';
import NetworkgraphModule from 'highcharts/modules/networkgraph';
import OrganizationModule from 'highcharts/modules/organization';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Total'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Porcentaje',
        data: [
          {y: 70, color: 'green', name: "Ferroso"},
          {y: 30, color: 'blue', name: "No Ferroso"}
        ],
        type: "pie"
      } 
    ]
  });

  chart2 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Total'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Porcentaje',
        data: [
          {y: 10, color: 'red', name: "Desperdicio"},
          {y: 90, color: 'yellow', name: "Util"}
        ],
        type: "pie"
      } 
    ]
  });

}
