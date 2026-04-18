"""
Day 5 — Matplotlib & Seaborn: Visualizing Real Data
Topics: Line, bar, histogram, scatter, countplot, boxplot,
        heatmap, pairplot, subplots dashboard, mini project
Dataset: Titanic (loaded from URL)
"""

import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

sns.set_theme(style="darkgrid", palette="muted")


# ── SECTION 1: Line Plot ────────────────────────────────────────────────────

days   = [1, 2, 3, 4, 5, 6, 7]
math   = [65, 70, 68, 75, 80, 78, 85]
python = [70, 75, 80, 78, 85, 88, 92]
stats  = [60, 63, 65, 70, 68, 72, 75]

fig, ax = plt.subplots(figsize=(9, 5))
ax.plot(days, math,   marker="o", label="Math",   color="blue")
ax.plot(days, python, marker="s", label="Python", color="green")
ax.plot(days, stats,  marker="^", label="Stats",  color="red")
ax.set_title("Subject Progress Over 7 Days")
ax.set_xlabel("Day")
ax.set_ylabel("Score")
ax.legend()
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("outputs/line_chart.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: line_chart.png")


# ── SECTION 2: Bar Chart ────────────────────────────────────────────────────

subjects  = ["Math", "Python", "Stats", "English", "ML"]
avg_score = [78, 92, 74, 85, 88]
colors    = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6"]

fig, ax = plt.subplots(figsize=(8, 5))
bars = ax.bar(subjects, avg_score, color=colors, width=0.5, edgecolor="white")

for bar, score in zip(bars, avg_score):
    ax.text(bar.get_x() + bar.get_width() / 2,
            bar.get_height() + 0.5,
            str(score), ha="center", va="bottom", fontsize=11)

ax.set_title("Average Score by Subject", fontsize=14)
ax.set_ylabel("Score")
ax.set_ylim(0, 105)
ax.axhline(y=75, color="red", linestyle="--", alpha=0.6, label="Pass mark")
ax.legend()
plt.tight_layout()
plt.savefig("outputs/bar_chart.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: bar_chart.png")


# ── SECTION 3: Histogram ────────────────────────────────────────────────────

scores = np.random.normal(loc=75, scale=10, size=200)

fig, ax = plt.subplots(figsize=(8, 5))
ax.hist(scores, bins=20, color="#3498db", edgecolor="white", alpha=0.8)
ax.axvline(scores.mean(),       color="red",   linestyle="--",
           label=f"Mean: {scores.mean():.1f}")
ax.axvline(np.median(scores),   color="green", linestyle="--",
           label=f"Median: {np.median(scores):.1f}")
ax.set_title("Score Distribution")
ax.set_xlabel("Score")
ax.set_ylabel("Count")
ax.legend()
plt.tight_layout()
plt.savefig("outputs/histogram.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: histogram.png")


# ── SECTION 4: Scatter Plot ──────────────────────────────────────────────────

study_hours = np.random.uniform(1, 10, 50)
exam_scores = study_hours * 7 + np.random.normal(0, 5, 50)

fig, ax = plt.subplots(figsize=(8, 5))
ax.scatter(study_hours, exam_scores, color="#e74c3c", alpha=0.7, s=60)
ax.set_title("Study Hours vs Exam Score")
ax.set_xlabel("Study Hours")
ax.set_ylabel("Exam Score")
ax.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("outputs/scatter_plot.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: scatter_plot.png")


# ── SECTION 5: Load Titanic + Seaborn Plots ─────────────────────────────────

url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df  = pd.read_csv(url)
df["Age"]      = df["Age"].fillna(df["Age"].median())
df["Embarked"] = df["Embarked"].fillna(df["Embarked"].mode()[0])


# Countplot
fig, ax = plt.subplots(figsize=(7, 5))
sns.countplot(data=df, x="Survived", hue="Sex", ax=ax)
ax.set_title("Survival Count by Gender")
ax.set_xticklabels(["Died", "Survived"])
plt.tight_layout()
plt.savefig("outputs/countplot.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: countplot.png")


# Boxplot
fig, ax = plt.subplots(figsize=(8, 5))
sns.boxplot(data=df, x="Pclass", y="Age", palette="Set2", ax=ax)
ax.set_title("Age Distribution by Passenger Class")
ax.set_xlabel("Passenger Class")
ax.set_ylabel("Age")
plt.tight_layout()
plt.savefig("outputs/boxplot.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: boxplot.png")


# Survival rate barplot
fig, ax = plt.subplots(figsize=(7, 5))
sns.barplot(data=df, x="Pclass", y="Survived", palette="Blues_d", ax=ax)
ax.set_title("Survival Rate by Passenger Class")
ax.set_xlabel("Passenger Class")
ax.set_ylabel("Survival Rate")
plt.tight_layout()
plt.savefig("outputs/survival_by_class.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: survival_by_class.png")


# Heatmap
numeric_cols = df[["Survived", "Pclass", "Age", "SibSp", "Parch", "Fare"]]
fig, ax = plt.subplots(figsize=(8, 6))
sns.heatmap(numeric_cols.corr(), annot=True, fmt=".2f",
            cmap="coolwarm", center=0, linewidths=0.5, ax=ax)
ax.set_title("Correlation Heatmap — Titanic")
plt.tight_layout()
plt.savefig("outputs/heatmap.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: heatmap.png")


# ── SECTION 6: Subplots Dashboard ───────────────────────────────────────────

fig, axes = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle("Titanic Dataset — Key Insights", fontsize=16, fontweight="bold")

sns.countplot(data=df, x="Sex", hue="Survived",
              ax=axes[0, 0], palette="Set1")
axes[0, 0].set_title("Survival by Gender")
axes[0, 0].legend(["Died", "Survived"])

sns.histplot(data=df, x="Age", hue="Survived",
            bins=25, kde=True, ax=axes[0, 1], alpha=0.6)
axes[0, 1].set_title("Age Distribution by Survival")

sns.barplot(data=df, x="Pclass", y="Survived",
            palette="Blues_d", ax=axes[1, 0])
axes[1, 0].set_title("Survival Rate by Class")
axes[1, 0].set_ylabel("Survival Rate")

sns.boxplot(data=df, x="Pclass", y="Fare",
            palette="Set2", ax=axes[1, 1])
axes[1, 1].set_title("Fare by Class")
axes[1, 1].set_ylim(0, 200)

plt.tight_layout()
plt.savefig("outputs/titanic_insights_dashboard.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: titanic_insights_dashboard.png")


# ── MINI PROJECT: Full Visual EDA Dashboard ─────────────────────────────────

df["FamilySize"] = df["SibSp"] + df["Parch"] + 1

fig, axes = plt.subplots(3, 2, figsize=(14, 14))
fig.suptitle("Titanic — Full EDA Dashboard (Mini Project)", fontsize=16, fontweight="bold")

# Q1: Passengers per class
sns.countplot(data=df, x="Pclass", palette="Set2", ax=axes[0, 0])
axes[0, 0].set_title("Q1: Passengers per Class")

# Q2: Survival rate by embarkation port
sns.barplot(data=df, x="Embarked", y="Survived",
            palette="muted", ax=axes[0, 1])
axes[0, 1].set_title("Q2: Survival Rate by Port")

# Q3: Survival rate by family size
sns.barplot(data=df, x="FamilySize", y="Survived",
            palette="Blues_d", ax=axes[1, 0])
axes[1, 0].set_title("Q3: Survival Rate by Family Size")

# Q4: Overall age distribution
sns.histplot(data=df, x="Age", bins=30, kde=True,
            color="#3498db", ax=axes[1, 1])
axes[1, 1].set_title("Q4: Age Distribution")

# Q5: Fare vs Age coloured by Survived
scatter_colors = df["Survived"].map({0: "#e74c3c", 1: "#2ecc71"})
axes[2, 0].scatter(df["Age"], df["Fare"], c=scatter_colors, alpha=0.5, s=20)
axes[2, 0].set_title("Q5: Fare vs Age (red=died, green=survived)")
axes[2, 0].set_xlabel("Age")
axes[2, 0].set_ylabel("Fare")
axes[2, 0].set_ylim(0, 300)

# Q6: Correlation heatmap
numeric = df[["Survived", "Pclass", "Age", "SibSp", "Parch", "Fare" ]]
sns.heatmap(numeric.corr(), annot=True, fmt=".2f",
            cmap="coolwarm", center=0, ax=axes[2, 1])
axes[2, 1].set_title("Q6: Correlation Heatmap")

plt.tight_layout()
plt.savefig("outputs/my_titanic_eda.png", dpi=150, bbox_inches="tight")
plt.show()
print("Saved: my_titanic_eda.png")
