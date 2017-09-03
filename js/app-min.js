// Area Chart
var ctx = document.getElementById('areaChart').getContext('2d');
var areaChart = new Chart(ctx, {
  type: 'line',

  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
      label: 'traffic',
      data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1350, 1500, 2000],
      backgroundColor: 'rgba(116,119,190, 0.28)',
      borderWidth: 2,
      borderColor: 'rgb(116,119,190)',
      pointRadius: 6,
      pointBackgroundColor: '#fff',
    }]
  },

  options: {

    maintainAspectRatio: false,

    elements: {
      line: {
tension: 0, // disables bezier curves
}
},

showLines: true,
// responsive: true,

legend: {
  display: false,
},

scales: {
  xAxes: [{
    gridLines: {
      offsetGridLines: true,
    },

    ticks: {
      fontColor: '#b5b5b5',
    }
  }],

  yAxes: [{
    ticks: {
// beginAtZero: true,
stepsize: 500,
suggestedMin: 0,
suggestedMax: 2500,
fontColor: '#b5b5b5',
}
}]
}

}

});


// Bar Chart
var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',

  data: {
    labels: ["S","M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: 'traffic',
      data: [50, 75, 150, 100, 200, 180, 75],
      backgroundColor: 'rgb(116,119,190)',
    }]
  },

// Configuration options go here
options: {
  legend: {
    display: false,
  },

  maintainAspectRatio: false,

  scales: {
    xAxes: [{
      gridLines: {
        offsetGridLines: true,
      },

      ticks: {
        fontColor: '#b5b5b5',
      }
    }],

    yAxes: [{
      ticks: {
        suggestedMin: 0,
        suggestedMax: 250,
        fontColor: '#b5b5b5',
      }
    }],
  }
}

});


// Donut Chart
var ctx = document.getElementById("chartDonut").getContext('2d');
var chartDonut = new Chart(ctx, {
  type: 'doughnut',
  options: {
    legend: {
      position: 'right',
    },
    maintainAspectRatio: false,
    cutoutPercentage: 55,
    rotation: 4.3,
  },
  data: {
    labels: [
    'Phones',
    'Tablets',
    'Desktop'
    ],
    datasets: [{
      data: [15, 17, 71],
      backgroundColor: [
"#81c98f", // Bluish
"#74b1bf", // Green
"#7477be", // Purple
],
borderWidth: 0,
}]
}
});

// Message check
const username = document.getElementById('username');
const userMessage = document.getElementById('message');
const sendButton = document.getElementById('send');
const messageSection = document.getElementById('message-section');

// Step 1
const p = document.createElement('p');

// Step 2
const errorMessage = document.createTextNode("Please ensure both fields are complete");
const successMessage = document.createTextNode("Message sent");


// Clear Message
function clearMessage() {
  if(messageSection.contains(p)) {
    p.textContent = "";
    messageSection.removeChild(p);
  }
}


sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  clearMessage();
  if (username.value == "" || userMessage.value == "" ) {
    p.appendChild(errorMessage);
    messageSection.appendChild(p);
  } else {
    p.appendChild(successMessage);
    messageSection.appendChild(p);
  }
});


