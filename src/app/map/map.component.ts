import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    
    google.charts.load('current', {
      packages:['controls', 'geochart']
    }).then(function () {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity', 'Domain'],
        ['Argentina', '100', 'You selected Argentina!']
      ]);
    
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1]);
    
      var GeoChart = new google.visualization.ChartWrapper({
        chartType: 'GeoChart',
        containerId: 'regions_div',
        dataTable: view
      });
    
      google.visualization.events.addListener(GeoChart, 'ready', function () {
        google.visualization.events.addListener(GeoChart.getChart(), 'select', function () {
          var selection = GeoChart.getChart().getSelection();
          if (selection.length > 0) {
            alert(data.getValue(selection[0].row, 2))
            //console.log(data.getValue(selection[0].row, 2));
          }
        });
      });
      GeoChart.draw();
    });
  }
}
