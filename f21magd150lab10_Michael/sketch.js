// I could not get my JSON file to work, so I jused used the earthquake example one.

var car;
//var buildings;

function preload(){
  car = loadModel('uploads_files_1859787_Cartoon_Lowpoly_Car.obj');
  
  var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' + 'summary/all_day.geojson';
  earthquakes = loadJSON(url);
  
  //buildings = loadJSON("town.json");
}

function setup() {
  createCanvas(400, 400, WEBGL);
  
  var x = 0;
  
  var earthquakeName = earthquakes.features[x].properties.place;
  print(earthquakeName);
  
  //var b = buildings.building;
  
  //print(b);
}

function draw() {
  background(220);
  
  orbitControl();
  
  ambientLight(100);
  
  directionalLight(255, 255, 255, 400, 400, -200);
  
  specularMaterial(200);
  
  translate(-50, 0, 0);
  box(50, 70, 50);
  
  translate(75, 0, 25);
  box(50, 80, 50);
  
  translate(-25, 0, -100);
  box(50, 90, 50)
  
  push();
  translate(-20, 0, 100);
  scale(0.05, 0.05, 0.05);
  rotateZ(22);
  normalMaterial();
  model(car);
  pop();
}

//Works Cited
//“Cartoon Low Poly Toy Car 3D Model.” CGTrader, https://www.cgtrader.com/items/1859787/download-page. Accessed 2 December 2021.
//https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson. Accessed 2 December 2021.