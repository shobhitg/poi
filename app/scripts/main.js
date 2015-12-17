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
  if(data.text === 'Thermostat-01') {
    $('.thermostat1').removeClass('hidden');
  } else {
    $('.thermostat1').addClass('hidden');
  }

  if(data.text === 'Thermostat-02') {
    $('.thermostat2').removeClass('hidden');
  } else {
    $('.thermostat2').addClass('hidden');
  }

  console.log(data);
});

$('.combobox').combobox();

console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
