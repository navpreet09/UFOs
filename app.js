
const tableData = data;

var tbody = d3.select("tbody");

function buildTable(data) {

  tbody.html("");


  data.forEach((dataRow) => {

    let row = tbody.append("tr");


    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}


var filters={};


function updateFilters() {

    let changedelement=d3.select(this);

    let elementvalue=changedelement.property("value");
    console.log(elementvalue);

    let filterid=changedelement.attr("id");
    console.log(filterid);

    if (elementvalue){
        filters[filterid]=elementvalue;
    }
    else{
        delete filters[filterid];
    }
  
   
    filterTable();
  
  }
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData=tableData;

    let date=d3.select("#datetime").property("value");
    let city=d3.select("#city").property("value");
    let state=d3.select("#state").property("value");
    let country=d3.select("#country").property("value");
    let shape=d3.select("#shape").property("value");
    for(let key in filters){  
        if(filters[key]==date){
            filteredData=filteredData.filter(row=>row.datetime===date);
        }
        else if(filters[key]==city){
            filteredData=filteredData.filter(row=>row.city===city);
        }
        else if(filters[key]==state){
            filteredData=filteredData.filter(row=>row.state===state);
        }
        else if(filters[key]==country){
            filteredData=filteredData.filter(row=>row.country===country);
        }
        else if(filters[key]==shape){
            filteredData=filteredData.filter(row=>row.shape===shape);
        }

    }
  
    buildTable(filteredData);
  }
    
  d3.selectAll("input").on("change",updateFilters);
 
  buildTable(tableData);
  console.log(filters);