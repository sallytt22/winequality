// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")




var rowConverter = function (d) {
  return {
    alcohol: +d.alcohol,
    chlorides: +d.chlorides,
    citric_acid: +d.citric_acid,
    density: +d.density,
    fixed_acidity: +d.fixed_acidity,
    free_sulfur_dioxide: +d.free_sulfur_dioxide,
    pH: +d.pH,
    quality: +d.quality,
    residual_sugar: +d.residual_sugar,
    sulphates: +d.sulphates,
    total_sulfur_dioxide: +d.total_sulfur_dioxide,
    volatile_acidity: +d.volatile_acidity,
    quality_category: d.quality_category,
    color: d.color
    }
};




var parse = function (data) {
  // Add X axis
  var x = d3.scaleLinear()
    .domain([8, 15])
    .range([0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([2, 5])
    .range([height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));


  var selectedOption1 = "alcohol"
  var selectedOption2 = "pH"

  d3.select("select#selectx").on("change", function(d){
    selectedOption1 = d3.select(this).property("value")
    //console.log(selectedOption1)
  })

  d3.select("select#selecty").on("change", function(d){
    selectedOption2 = d3.select(this).property("value")
    //console.log(selectedOption2)
  })


  d3.select("#submit").on("click", function () {
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")")
    //console.log(selectedOption1)
    if (selectedOption1 == "alcohol") {
      var x = d3.scaleLinear()
        .domain([8, 15])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    } else if (selectedOption1 == "chlorides") {
      var x = d3.scaleLinear()
        .domain([0.00, 0.70])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    } else if (selectedOption1 == "citric_acid") {
      var x = d3.scaleLinear()
        .domain([0, 1])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    } else if (selectedOption1 == "density") {
      var x = d3.scaleLinear()
        .domain([0.9900, 1.0050])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    } else if (selectedOption1 == "fixed_acidity") {
      var x = d3.scaleLinear()
        .domain([4, 16])
        .range([0, width]);
      //console.log(x)
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    } else if (selectedOption1 == "free_sulfur_dioxide") {
      var x = d3.scaleLinear()
        .domain([0, 100])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    } else if (selectedOption1 == "pH") {
      var x = d3.scaleLinear()
        .domain([2, 5])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    } else if (selectedOption1 == "quality") {
      var x = d3.scaleLinear()
        .domain([0, 10])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    } else if (selectedOption1 == "residual_sugar") {
      var x = d3.scaleLinear()
        .domain([0, 16])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    } else if (selectedOption1 == "sulphates") {
      var x = d3.scaleLinear()
        .domain([0, 2])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    } else if (selectedOption1 == "total_sulfur_dioxide") {
      var x = d3.scaleLinear()
        .domain([0, 300])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    } else {
      var x = d3.scaleLinear()
        .domain([0, 2])
        .range([0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    }



      if (selectedOption2 == "alcohol") {
        var y = d3.scaleLinear()
          .domain([8, 15])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      } else if (selectedOption2 == "chlorides") {
        var y = d3.scaleLinear()
          .domain([0.00, 0.70])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      } else if (selectedOption2 == "citric_acid") {
        var y = d3.scaleLinear()
          .domain([0, 1])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      } else if (selectedOption2 == "density") {
        var y = d3.scaleLinear()
          .domain([0.9900, 1.0050])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      } else if (selectedOption2 == "fixed_acidity") {
        var y = d3.scaleLinear()
          .domain([4, 16])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      } else if (selectedOption2 == "free_sulfur_dioxide") {
        var y = d3.scaleLinear()
          .domain([0, 100])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      } else if (selectedOption2 == "pH") {
        var y = d3.scaleLinear()
          .domain([2, 5])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      } else if (selectedOption2 == "quality") {
        var y = d3.scaleLinear()
          .domain([0, 10])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      } else if (selectedOption2 == "residual_sugar") {
        var y = d3.scaleLinear()
          .domain([0, 16])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      } else if (selectedOption2 == "sulphates") {
        var y = d3.scaleLinear()
          .domain([0, 2])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      } else if (selectedOption2 == "total_sulfur_dioxide") {
        var y = d3.scaleLinear()
          .domain([0, 300])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      } else {
        var y = d3.scaleLinear()
          .domain([0, 2])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y));
      }

      svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
          .attr("cx",  d => x(d[selectedOption1]))
          .attr("cy", d => y(d[selectedOption2]))
          .attr("r", 1.5)
          .style("fill", d => d.color);


      // text label for the x axis
      svg.append("text")
          .attr("transform",
                "translate(" + (width/2) + " ," +
                               (height + margin.top + 20) + ")")
          .style("text-anchor", "middle")
          .text(selectedOption1);

      // text label for the y axis
      svg.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 0 - margin.left)
          .attr("x",0 - (height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text(selectedOption2);

      var title = selectedOption2 + " vs " + selectedOption1;
      svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top/10000))
        .attr("text-anchor", "middle")
        .style("font-size", "15px")
        .text(title);

      svg.append("circle").attr("cx",350).attr("cy",30).attr("r", 2).style("fill", "red")
      svg.append("circle").attr("cx",350).attr("cy",60).attr("r", 2).style("fill", "green")
      svg.append("circle").attr("cx",350).attr("cy",90).attr("r", 2).style("fill", "blue")
      svg.append("text").attr("x", 370).attr("y", 30).text("poor").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 370).attr("y", 60).text("avg").style("font-size", "15px").attr("alignment-baseline","middle")
      svg.append("text").attr("x", 370).attr("y", 90).text("good").style("font-size", "15px").attr("alignment-baseline","middle")

  });

  d3.select("#restart").on("click", function () {
    d3.selectAll('svg').remove();
  });



  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx",  d => x(d[selectedOption1]))
      .attr("cy", d => y(d[selectedOption2]))
      .attr("r", 1.5)
      .style("fill", d => d.color);

  // text label for the x axis
  svg.append("text")
      .attr("transform",
            "translate(" + (width/2) + " ," +
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("alcohol");

  // text label for the y axis
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("pH");

  svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 0 - (margin.top/10000))
    .attr("text-anchor", "middle")
    .style("font-size", "15px")
    .text("pH vs alcohol");

  svg.append("circle").attr("cx",350).attr("cy",30).attr("r", 2).style("fill", "red")
  svg.append("circle").attr("cx",350).attr("cy",60).attr("r", 2).style("fill", "green")
  svg.append("circle").attr("cx",350).attr("cy",90).attr("r", 2).style("fill", "blue")
  svg.append("text").attr("x", 370).attr("y", 30).text("poor").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("text").attr("x", 370).attr("y", 60).text("avg").style("font-size", "15px").attr("alignment-baseline","middle")
  svg.append("text").attr("x", 370).attr("y", 90).text("good").style("font-size", "15px").attr("alignment-baseline","middle")
}

d3.csv("https://raw.githubusercontent.com/sallytt22/winequality/main/resource/winequality-red-transform.csv",
rowConverter,parse)
