# AI/ML Learning Journey

A structured day-by-day progression from complete beginner to job-ready AI/ML engineer.

## Progress Tracker

| Week | Topic | Status |
|------|-------|--------|
| Week 1 | Python, NumPy, Pandas, Visualization, EDA | Complete |
| Week 2 | Classical ML Algorithms | Upcoming |
| Week 3 | Model Evaluation & Feature Engineering | Upcoming |
| Week 4 | Deep Learning Foundations | Upcoming |

## Repository Structure

```
ml-journey/
├── week1-python-foundations/
│   ├── day1_basics.py
│   ├── day2_dictionaries_files.py
│   ├── day3_numpy.py
│   ├── day4_pandas.py
│   ├── day5_visualization.py
│   └── day6_eda_pipeline.py
├── outputs/       # Generated charts and dashboards
└── datasets/      # Data loaded via URL in scripts
```

## Week 1 — What I Learned

- **Day 1:** Variables, data types, lists, loops, functions
- **Day 2:** Dictionaries, *args/**kwargs, lambda, error handling, file I/O
- **Day 3:** NumPy arrays, matrix ops, boolean masking, normalization
- **Day 4:** Pandas Series/DataFrame, filtering, groupby, missing value handling
- **Day 5:** Matplotlib & Seaborn — 8 chart types on Titanic dataset
- **Day 6:** End-to-end EDA pipeline on Boston Housing dataset

## Key Project — Boston Housing EDA

Complete exploratory data analysis on the Boston Housing dataset.

**Key Findings:**
- Rooms per house (rm) is the strongest positive predictor (corr: 0.70)
- % lower-status population (lstat) is the strongest negative predictor (corr: -0.74)
- Crime rate and tax rate show significant negative correlations with price

## How to Run

```bash
# Clone
git clone https://github.com/yourusername/ml-journey.git
cd ml-journey

# Install dependencies
pip install numpy pandas matplotlib seaborn

# Run any day
python week1-python-foundations/day6_eda_pipeline.py
```

## Tech Stack

- Python 3.10+
- NumPy
- Pandas
- Matplotlib
- Seaborn

## Roadmap

- **Month 1:** Python + Math + Data Foundations
- **Month 2:** Classical ML (Scikit-learn)
- **Month 3:** Deep Learning + Specialization (NLP / CV / GenAI)
- **Month 4:** Projects + Portfolio + Job Hunt
