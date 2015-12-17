var tree = [
  {
    text: "Palo Alto Medical Foundation",
    nodes: [
      {
        text: "Thermostats",
        nodes: [
          {
            text: "Thermostat-01"
          },
          {
            text: "Thermostat-02"
          }
        ]
      },
      {
        text: "Remote patient monitoring",
        nodes: [
          {
            text: "Patient-A"
          },
          {
            text: "Patient-B"
          }
        ]
      }
    ]
  }
];

function getTree() {
  // Some logic to retrieve, or generate tree structure
  return tree;
}

$('#tree').treeview({data: getTree()});

$('#tree').on('nodeSelected', function(event, data) {
  // Your logic goes here
  console.log(data);
});

console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
