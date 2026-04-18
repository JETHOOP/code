"""
Day 6 — End-to-End Data Analysis Pipeline (Week 1 Capstone)
Topics: Full EDA workflow — load, explore, missing values,
        correlation, visualize, outliers, segment, summary report
Dataset: Boston Housing (loaded from URL)
"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

sns.set_theme(style="darkgrid", palette="muted")


# ── STEP 1: Load Dataset ────────────────────────────────────────────────────

url = "https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv"
df  = pd.read_csv(url)

print("=" * 50)
print("STEP 1: BASIC INFO")
print("=" * 50)
print(f"Rows   : {df.shape[0]}")
print(f"Columns: {df.shape[1]}")
print(f"\nColumn names: {df.columns.tolist()}")
print(f"\nFirst 5 rows:\n{df.head()}")


# ── STEP 2: Missing Values Audit ────────────────────────────────────────────

print("\n" + "=" * 50)
print("STEP 2: MISSING VALUES")
print("=" * 50)
missing     = df.isnull().sum()
missing_pct = (df.isnull().sum() / len(df)) * 100
missing_df  = pd.DataFrame({
    "Missing Count": missing,
    "Missing %":     missing_pct.round(2)
})
missing_found = missing_df[missing_df["Missing Count"] > 0]
if len(missing_found) == 0:
    print("No missing values — clean dataset!")
else:
    print(missing_found)


# ── STEP 3: Statistical Summary ─────────────────────────────────────────────

print("\n" + "=" * 50)
print("STEP 3: STATISTICAL SUMMARY")
print("=" * 50)
print(df.describe().round(2))


# ── STEP 4: Target Variable Analysis ────────────────────────────────────────

print("\n" + "=" * 50)
print("STEP 4: TARGET VARIABLE — medv (House Price)")
print("=" * 50)
print(f"Mean price   : ${df['medv'].mean() * 1000:,.0f}")
print(f"Median price : ${df['medv'].median() * 1000:,.0f}")
print(f"Min price    : ${df['medv'].min() * 1000:,.0f}")
print(f"Max price    : ${df['medv'].max() * 1000:,.0f}")
print(f"Std dev      : ${df['medv'].std() * 1000:,.0f}")
print(f"Skewness     : {df['medv'].skew():.2f}  (0=normal, >1=right skewed)")


# ── STEP 5: Correlation Analysis ────────────────────────────────────────────

print("\n" + "=" * 50)
print("STEP 5: CORRELATION WITH HOUSE PRICE")
print("=" * 50)
correlations = df.corr()["medv"].sort_values(ascending=False)
print(correlations.round(2))


# ── STEP 6: Correlation Heatmap ─────────────────────────────────────────────

fig, ax = plt.subplots(figsize=(11, 8))
sns.heatmap(df.corr(), annot=True, fmt=".2f",
            cmap="coolwarm", center=0,
            linewidths=0.5, ax=ax)
ax.set_title("Feature Correlation Heatmap — Boston Housing", fontsize=14)
plt.tight_layout()
plt.savefig("outputs/correlation_heatmap.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: correlation_heatmap.png")


# ── STEP 7: Top Features vs Price ───────────────────────────────────────────

top_features = ["rm", "lstat", "ptratio", "crim"]
labels = {
    "rm":      "Avg Rooms per House",
    "lstat":   "% Lower Status Population",
    "ptratio": "Pupil-Teacher Ratio",
    "crim":    "Crime Rate"
}

fig, axes = plt.subplots(2, 2, figsize=(12, 9))
axes = axes.flatten()

for i, feature in enumerate(top_features):
    axes[i].scatter(df[feature], df["medv"],
                    alpha=0.5, color="#3498db", s=20)
    z      = np.polyfit(df[feature], df["medv"], 1)
    p      = np.poly1d(z)
    x_line = np.linspace(df[feature].min(), df[feature].max(), 100)
    axes[i].plot(x_line, p(x_line), "r--", linewidth=2, label="Trend")
    axes[i].set_xlabel(labels[feature])
    axes[i].set_ylabel("House Price ($1000s)")
    axes[i].set_title(f"{labels[feature]} vs Price")
    axes[i].legend()

plt.suptitle("Key Features vs House Price", fontsize=14, fontweight="bold")
plt.tight_layout()
plt.savefig("outputs/feature_relationships.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: feature_relationships.png")


# ── STEP 8: Distribution of All Features ────────────────────────────────────

fig, axes = plt.subplots(4, 4, figsize=(16, 12))
axes = axes.flatten()

for i, col in enumerate(df.columns):
    axes[i].hist(df[col], bins=25, color="#2ecc71", edgecolor="white", alpha=0.8)
    axes[i].set_title(col, fontsize=10)

for j in range(len(df.columns), len(axes)):
    axes[j].set_visible(False)

plt.suptitle("Distribution of All Features", fontsize=14, fontweight="bold")
plt.tight_layout()
plt.savefig("outputs/all_distributions.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: all_distributions.png")


# ── STEP 9: Outlier Detection (IQR Method)  ──────────────────────────────────

print("\n" + "=" * 50)
print("STEP 9: OUTLIER DETECTION")
print("=" * 50)

def detect_outliers(df, column):
    """Return count of outliers and IQR bounds for a column."""
    Q1      = df[column].quantile(0.25)
    Q3      = df[column].quantile(0.75)
    IQR     = Q3 - Q1
    lower   = Q1 - 1.5 * IQR
    upper   = Q3 + 1.5 * IQR
    outliers = df[(df[column] < lower) | (df[column] > upper)]
    return len(outliers), lower, upper

for col in ["medv", "crim", "rm", "lstat"]:
    count, low, high = detect_outliers(df, col)
    print(f"{col:10}: {count:3} outliers | valid range: [{low:.2f}, {high:.2f}]")


# ── STEP 10: Price Segmentation ─────────────────────────────────────────────

print("\n" + "=" * 50)
print("STEP 10: PRICE SEGMENTS")
print("=" * 50)

df["price_segment"] = pd.cut(
    df["medv"],
    bins=[0, 15, 25, 35, 100],
    labels=["Budget", "Mid-Range", "Premium", "Luxury"]
)

segment_analysis = df.groupby("price_segment").agg({
    "rm":   "mean",
    "crim": "mean",
    "lstat":"mean",
    "medv": "count"
}).round(2)
segment_analysis.columns = ["Avg Rooms", "Avg Crime", "Avg Low Status %", "Count"]
print(segment_analysis)


# ── STEP 11: Full 9-Panel Dashboard ─────────────────────────────────────────

fig = plt.figure(figsize=(16, 12))
fig.suptitle("Boston Housing — Complete EDA Dashboard",
             fontsize=16, fontweight="bold", y=1.01)

ax1 = fig.add_subplot(3, 3, 1)
ax1.hist(df["medv"], bins=30, color="#3498db", edgecolor="white")
ax1.axvline(df["medv"].mean(), color="red", linestyle="--", label="Mean")
ax1.set_title("House Price Distribution")
ax1.set_xlabel("Price ($1000s)")
ax1.legend(fontsize=8)

ax2 = fig.add_subplot(3, 3, 2)
ax2.scatter(df["rm"], df["medv"], alpha=0.5, color="#2ecc71", s=15)
ax2.set_title("Rooms vs Price")
ax2.set_xlabel("Avg Rooms")
ax2.set_ylabel("Price")

ax3 = fig.add_subplot(3, 3, 3)
ax3.scatter(df["crim"], df["medv"], alpha=0.5, color="#e74c3c", s=15)
ax3.set_title("Crime Rate vs Price")
ax3.set_xlabel("Crime Rate")
ax3.set_ylabel("Price")

ax4 = fig.add_subplot(3, 3, 4)
segment_counts = df["price_segment"].value_counts()
ax4.bar(segment_counts.index, segment_counts.values,
        color=["#3498db", "#2ecc71", "#f39c12", "#e74c3c"])
ax4.set_title("Price Segments")
ax4.set_ylabel("Count")

ax5 = fig.add_subplot(3, 3, 5)
corr_vals   = df.drop(columns=["medv", "price_segment"]).corrwith(df["medv"]).sort_values()
colors_corr = ["#e74c3c" if v < 0 else "#2ecc71" for v in corr_vals]
ax5.barh(corr_vals.index, corr_vals.values, color=colors_corr)
ax5.set_title("Feature Correlation with Price")
ax5.axvline(0, color="black", linewidth=0.8)

ax6 = fig.add_subplot(3, 3, 6)
df.boxplot(column="medv", by="price_segment", ax=ax6)
ax6.set_xlabel("Segment")
ax6.set_ylabel("Price")
plt.sca(ax6)
plt.title("Price by Segment")
plt.suptitle("")

ax7 = fig.add_subplot(3, 3, 7)
ax7.scatter(df["lstat"], df["medv"], alpha=0.5, color="#9b59b6", s=15)
ax7.set_title("Low Status % vs Price")
ax7.set_xlabel("lstat")
ax7.set_ylabel("Price")

ax8 = fig.add_subplot(3, 3, 8)
ax8.scatter(df["age"], df["medv"], alpha=0.5, color="#f39c12", s=15)
ax8.set_title("Building Age vs Price")
ax8.set_xlabel("Age")
ax8.set_ylabel("Price")

ax9 = fig.add_subplot(3, 3, 9)
ax9.scatter(df["tax"], df["medv"], alpha=0.5, color="#1abc9c", s=15)
ax9.set_title("Tax Rate vs Price")
ax9.set_xlabel("Tax Rate")
ax9.set_ylabel("Price")

plt.tight_layout()
plt.savefig("outputs/full_eda_dashboard.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: full_eda_dashboard.png")


# ── STEP 12: Written Summary Report ─────────────────────────────────────────

print("\n" + "=" * 60)
print("       BOSTON HOUSING — EDA SUMMARY REPORT")
print("=" * 60)
print(f"""
DATASET
  Rows         : {df.shape[0]}
  Columns      : {df.shape[1]}
  Missing vals : {df.isnull().sum().sum()}

HOUSE PRICES
  Mean         : ${df['medv'].mean() * 1000:,.0f}
  Median       : ${df['medv'].median() * 1000:,.0f}
  Range        : ${df['medv'].min() * 1000:,.0f} – ${df['medv'].max() * 1000:,.0f}

TOP PREDICTORS
  Positive     : rm (rooms), dis (distance to jobs), zn
  Negative     : lstat, ptratio, crim, age

KEY INSIGHTS
  1. More rooms → higher price   (corr: {df['rm'].corr(df['medv']):.2f})
  2. More poverty → lower price  (corr: {df['lstat'].corr(df['medv']):.2f})
  3. Higher crime → lower price  (corr: {df['crim'].corr(df['medv']):.2f})
  4. Luxury avg rooms  : {df[df['price_segment'] == 'Luxury']['rm'].mean():.1f}
     Budget avg rooms  : {df[df['price_segment'] == 'Budget']['rm'].mean():.1f}

STATUS: Clean dataset. Strong correlations found. Ready for ML.
""")
