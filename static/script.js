async function loadData() {
  const res = await fetch('/api/data');
  const data = await res.json();

  document.getElementById('total-streams').textContent = `🎧 Total Streams: ${data.total_streams_all_time.toLocaleString()} (All-Time) / ${data.total_streams_daily.toLocaleString()} today`;
  document.getElementById('monthly-listeners').textContent = `🌍 Monthly Listeners: ${data.monthly_listeners.toLocaleString()} (Global Rank ${data.global_rank})`;
  document.getElementById('fastest-growing').textContent = `🚀 Fastest Growing: ${data.fastest_growing_country} - ${data.fastest_growing_city}`;

  document.getElementById('days-on-chart').textContent = `📆 Days on Chart: ${data.chart_performance.days_on_chart}`;

  renderRankChart(data.chart_performance);
  renderBarChart('country-chart', data.top_countries);
  renderBarChart('city-chart', data.top_cities);

  document.getElementById('milestone').textContent = data.milestone;
}

function renderRankChart(perf) {
  const ctx = document.getElementById('rank-chart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Global', 'US', 'South Korea'],
      datasets: [{
        label: 'Rank',
        data: [perf.global_rank, perf.us_rank, perf.south_korea_rank],
        backgroundColor: ['#4e79a7', '#f28e2b', '#e15759']
      }]
    },
    options: {
      scales: {
        y: { reverse: true, beginAtZero: false }
      }
    }
  });
}

function renderBarChart(id, items) {
  const ctx = document.getElementById(id);
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: items.map(i => i.name),
      datasets: [{
        label: 'Streams',
        data: items.map(i => i.streams),
        backgroundColor: '#4e79a7'
      }]
    },
    options: {
      plugins: { legend: { display: false } }
    }
  });
}

loadData();
