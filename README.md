# Spotify Dashboard

This project contains a small FastAPI application that serves a simple
Spotify analytics dashboard. The data is loaded from `data.json` and
displayed in the browser using Chart.js.

## Running the server

```bash
python3 -m uvicorn app.main:app --reload --port 8000
```

Then open `http://localhost:8000` in your browser.

## Updating data

Edit the `data.json` file with your latest Spotify statistics or automate
updates using the Spotify API. The dashboard expects the following fields:

- `total_streams_all_time`
- `total_streams_daily`
- `monthly_listeners`
- `global_rank`
- `fastest_growing_country`
- `fastest_growing_city`
- `chart_performance`
  - `global_rank`
  - `us_rank`
  - `south_korea_rank`
  - `days_on_chart`
- `top_countries` (array with `name` and `streams`)
- `top_cities` (array with `name` and `streams`)
- `milestone`

Feel free to adapt the frontend to your needs or connect the API to a
real database for historical tracking.
