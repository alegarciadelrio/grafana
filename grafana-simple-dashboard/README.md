# Grafana Simple Dashboard

This directory contains a template for a simple Grafana dashboard that can be imported into your Grafana instance. The dashboard is designed to be easily customizable for various monitoring needs.

## Dashboard Overview

The `grafana-simple-dashboard.json` file provides a template with three time series panels arranged vertically. Each panel is pre-configured to use Prometheus as a data source and can be customized to display different metrics.

## Customizable Attributes

### Dashboard-Level Attributes

These attributes affect the entire dashboard:

| Attribute | Description | Location in JSON |
|-----------|-------------|------------------|
| `title` | Dashboard title displayed at the top | Line 320 |
| `uid` | Unique identifier for the dashboard | Line 321 |
| `refresh` | Auto-refresh interval (default: "5s") | Line 305 |
| `time.from` and `time.to` | Default time range (default: last hour) | Lines 315-316 |
| `tags` | Dashboard tags for organization | Lines 307-310 |

### Panel-Level Attributes

Each panel (there are 3 identical panels in the template) can be customized:

| Attribute | Description | Location in JSON (Panel 1) |
|-----------|-------------|----------------------------|
| `title` | Panel title | Line 114 |
| `datasource.uid` | Data source UID | Line 27 |
| `targets[0].expr` | PromQL query expression | Line 108 |
| `targets[0].legendFormat` | Legend label format | Line 109 |
| `gridPos` | Panel position and size | Lines 80-85 |
| `fieldConfig.defaults.custom` | Visual styling options | Lines 34-66 |

### Data Source Configuration

The dashboard template uses a variable `${DS_PROMETHEUS}` for the Prometheus data source UID. When importing the dashboard, you'll need to:

1. Replace `prometheus-uid` with your actual Prometheus data source UID, or
2. During import, Grafana will prompt you to map the variable to an existing data source

## How to Customize the Dashboard

1. **Basic Customization**:
   - Open the JSON file in a text editor
   - Change the dashboard title, refresh rate, and time range as needed
   - Update the panel titles to reflect the metrics they display
   - Modify the tags to match your organization's tagging scheme

2. **Panel Queries**:
   - Replace `"expr": "expression"` with your actual PromQL queries
   - Update `"legendFormat": "expression-title"` to provide meaningful labels for your metrics
   - Example for CPU usage: `"expr": "100 - (avg by(instance) (irate(node_cpu_seconds_total{mode='idle'}[5m])) * 100)"`

3. **Visual Styling**:
   - Adjust panel sizes by modifying the `gridPos` values (`h` for height, `w` for width)
   - Customize line styles, colors, and thresholds in the `fieldConfig.defaults` section

4. **Adding More Panels**:
   - Copy an existing panel section and paste it before the closing `]` of the `panels` array
   - Ensure each panel has a unique `id` value
   - Update the `gridPos.y` value to position the new panel below existing ones

## Importing the Dashboard

To import this dashboard into Grafana:

1. In Grafana, go to Dashboards > Import
2. Upload the JSON file or paste its contents
3. Map any required variables to your data sources
4. Click Import

## Example Use Cases

This simple dashboard template can be adapted for various monitoring scenarios:

- System metrics (CPU, memory, disk usage)
- Application performance metrics
- Network traffic monitoring
- Custom business metrics

## Tips for Effective Dashboards

- Keep panel titles clear and descriptive
- Use consistent naming conventions for metrics
- Group related metrics on the same dashboard
- Consider using variables for filtering (e.g., by instance, job, environment)
- Add documentation using Text panels to explain complex metrics