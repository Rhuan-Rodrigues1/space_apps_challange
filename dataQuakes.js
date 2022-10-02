google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

    async function drawChart() {
        var url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson"
        var array = [["where", "magnitude"]]
        var aux_array = []
    
        await fetch(url)
        .then((resp) => (resp.json()))
        .then((dataApi) => {
            
            for(let i = 0; i < 5; i++) {
                var place = dataApi.features[i].properties.place
                var mag =  dataApi.features[i].properties.mag
                var tsunami = dataApi.features[i].properties.tsunami
                aux_array = [place, mag]
                array.push(aux_array)
    
            }
        })
    
        
    
        console.log(array);
        
    
        var data = google.visualization.arrayToDataTable(array);
    
        console.log(data);
    
        var options = {
            title: 'Age vs. Weight comparison',
            hAxis: {title: 'Age', minValue: 0, maxValue: 15},
            vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
            legend: 'none'
          };
  
  
        
    
        var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
        chart.draw(data, options);
    }


