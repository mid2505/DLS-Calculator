# DLS Calculator - Cricket Match Analysis

A modern web-based calculator for the Duckworth-Lewis-Stern (DLS) method, used to calculate revised targets in rain-interrupted cricket matches. This tool supports both T20 and ODI (50-over) formats.

## 🏏 Features

- **Complete DLS Calculator** - Calculate revised targets for interrupted cricket matches
- **Multiple Format Support** - Supports both T20 (20 overs) and ODI (50 overs) cricket
- **Mid-Innings Interruption** - Handle interruptions during Team 2's innings
- **Interactive UI** - Clean, responsive design with real-time calculations
- **Pre-loaded Scenarios** - Quick access to common match situations
- **Detailed Results** - Shows resource percentages, par scores, and target details

## 📋 What is DLS?

The Duckworth-Lewis-Stern (DLS) method is a mathematical formulation used to calculate target scores in limited-overs cricket matches interrupted by weather or other circumstances. It considers the resources available to each team (overs and wickets) to determine a fair revised target.

## 💻 Usage

It's live at 

### Basic Calculation

1. **Enter Team 1 Details:**
   - Score
   - Wickets lost
   - Overs faced

2. **Enter Match Details:**
   - Total overs per innings (default 50 for ODI, 20 for T20)
   - Team 2 overs available

3. **Optional - Mid-Innings Interruption:**
   - If Team 2's innings was interrupted, fill in:
     - Score at interruption
     - Overs faced before interruption
     - Wickets at interruption

4. Click **Calculate Target** to see the revised target.

### Example Scenarios

The calculator includes pre-loaded scenarios for common situations:
- T20 mid-innings interruption
- ODI rain delay scenarios
- Target revision examples

## 📁 Project Structure

```
DLS/
│
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # DLS calculation logic and UI interaction
├── dls_table.csv       # DLS resource percentage table (ODI format)
└── README.md           # This file
```

## 🔧 Technical Details

### DLS Resource Tables

The calculator includes official DLS resource percentage tables for:
- **ODI (50 overs)** - Standard DLS table
- **T20 (20 overs)** - Optimized T20 resource table

### Calculation Methods

- **Team 1 Completes Innings, Team 2 Reduced:**
  ```
  Target = (Team1 Score × Team2 Resources) / Team1 Resources
  ```

- **Mid-Innings Interruption (Team 2):**
  ```
  Target = Par Score (at interruption) + Team1 Score × (Resource Loss) / Team1 Resources
  ```

## 📊 Data Source

DLS resource percentages are based on the official Duckworth-Lewis-Stern tables used in international cricket. The T20 resource table is optimized for the shorter format.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Author

Created with ⚡ for cricket enthusiasts

## 🔗 Links

- [Official DLS Explanation](https://en.wikipedia.org/wiki/Duckworth%E2%80%93Lewis%E2%80%93Stern_method)
- [ICC Cricket Rules](https://www.icc-cricket.com/about/cricket/rules-and-regulations)

## 📧 Contact

For questions or suggestions, please open an issue in the repository.

---

**Note:** This calculator is made as a fun project. For official match calculations, please refer to the ICC-approved DLS software.
