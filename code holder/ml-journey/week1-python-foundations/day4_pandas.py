"""
Day 4 — Pandas: Working With Real Data
Topics: Series, DataFrame, loading CSVs, filtering,
        groupby, missing values, feature creation, mini project
Dataset: Titanic (loaded from URL)
"""

import pandas as pd
import numpy as np


# ── SECTION 1: Series ───────────────────────────────────────────────────────

print("=== Series ===")
series = pd.Series([85, 92, 78, 95, 88])
print(series)
print(f"Mean: {series.mean():.2f}")

marks = pd.Series([85, 92, 78], index=["Math", "Python", "Stats"])
print(f"\nPython marks: {marks['Python']}")
print(f"Max: {marks.max()}")


# ── SECTION 2: DataFrame ────────────────────────────────────────────────────

print("\n=== DataFrame ===")
data = {
    "name":    ["Mohit", "Aryan", "Riya", "Priya", "Rahul"],
    "age":     [21, 22, 20, 23, 21],
    "score":   [88, 95, 72, 91, 65],
    "subject": ["Python", "ML", "Stats", "DL", "Python"],
    "passed":  [True, True, False, True, False]
}
df_sample = pd.DataFrame(data)
print(df_sample)


# ── SECTION 3: Load Real Dataset ────────────────────────────────────────────

print("\n=== Loading Titanic Dataset ===")
url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df = pd.read_csv(url)

print(f"Shape: {df.shape}")
print(f"\nColumns: {df.columns.tolist()}")
print(f"\nFirst 5 rows:\n{df.head()}")
print(f"\nData types:\n{df.dtypes}")
print(f"\nStatistical summary:\n{df.describe().round(2)}")


# ── SECTION 4: Selecting Data ───────────────────────────────────────────────

print("\n=== Selecting Data ===")
print(df[["Age", "Fare", "Survived"]].head())
print(f"\nRow 0:\n{df.iloc[0]}")
print(f"\nRow 0, Age column: {df.loc[0, 'Age']}")


# ── SECTION 5: Filtering Rows ───────────────────────────────────────────────

print("\n=== Filtering ===")
survivors    = df[df["Survived"] == 1]
first_class  = df[df["Pclass"] == 1]
rich_surv    = df[(df["Survived"] == 1) & (df["Pclass"] == 1)]
women_surv   = df[(df["Survived"] == 1) & (df["Sex"] == "female")]
older        = df[df["Age"] > 50]

print(f"Survivors           : {len(survivors)}")
print(f"First class         : {len(first_class)}")
print(f"1st class survivors : {len(rich_surv)}")
print(f"Women survived      : {len(women_surv)}")
print(f"Passengers over 50  : {len(older)}")


# ── SECTION 6: Sorting ──────────────────────────────────────────────────────

print("\n=== Sorting ===")
print("Youngest passengers:")
print(df.sort_values("Age").head(3)[["Name", "Age", "Survived"]])

print("\nMost expensive tickets:")
print(df.sort_values("Fare", ascending=False).head(3)[["Name", "Fare", "Pclass"]])


# ── SECTION 7: GroupBy ──────────────────────────────────────────────────────

print("\n=== GroupBy ===")
print("Survival rate by class:")
print(df.groupby("Pclass")["Survived"].mean().round(2))

print("\nSurvival rate by gender:")
print(df.groupby("Sex")["Survived"].mean().round(2))

print("\nMultiple aggregations by class:")
print(df.groupby("Pclass").agg({
    "Survived": "mean",
    "Age":      "mean",
    "Fare":     "mean"
}).round(2))

print("\nValue counts:")
print(df["Pclass"].value_counts())
print(df["Sex"].value_counts())


# ── SECTION 8: Handling Missing Values ─────────────────────────────────────

print("\n=== Missing Values ===")
print(df.isnull().sum())

# Fill Age with median (more robust to outliers than mean)
df["Age"] = df["Age"].fillna(df["Age"].median())

# Fill Embarked with mode
df["Embarked"] = df["Embarked"].fillna(df["Embarked"].mode()[0])

# Drop Cabin — too many missing values (687/891)
df = df.drop(columns=["Cabin"])

print("\nAfter cleaning:")
print(df.isnull().sum())


# ── SECTION 9: Creating New Columns ─────────────────────────────────────────

print("\n=== Feature Engineering ===")

# Extract title from name
df["Title"] = df["Name"].str.extract(r" ([A-Za-z]+)\.")
print("Titles found:")
print(df["Title"].value_counts().head(6))

# Age group
df["AgeGroup"] = pd.cut(
    df["Age"],
    bins=[0, 12, 18, 35, 60, 100],
    labels=["Child", "Teen", "Young Adult", "Adult", "Senior"]
)
print("\nAge groups:")
print(df["AgeGroup"].value_counts())

# Family size
df["FamilySize"] = df["SibSp"] + df["Parch"] + 1
print("\nFamily sizes:")
print(df["FamilySize"].value_counts().sort_index())


# ── MINI PROJECT: Titanic Analysis ──────────────────────────────────────────

print("\n=== Mini Project: Titanic Analysis ===")

# Reload clean copy
df = pd.read_csv(url)
df["Age"]      = df["Age"].fillna(df["Age"].median())
df["Embarked"] = df["Embarked"].fillna(df["Embarked"].mode()[0])
df["FamilySize"] = df["SibSp"] + df["Parch"] + 1

# Q1: Overall survival rate
q1 = df["Survived"].mean()
print(f"\nQ1. Overall survival rate: {q1:.1%}")

# Q2: Survival rate by class
q2 = df.groupby("Pclass")["Survived"].mean()
print(f"\nQ2. Survival rate by class:\n{q2.round(3)}")

# Q3: Average age of survivors vs non-survivors
q3 = df.groupby("Survived")["Age"].mean()
print(f"\nQ3. Avg age — Died: {q3[0]:.1f}, Survived: {q3[1]:.1f}")

# Q4: Survival rate by gender
q4 = df.groupby("Sex")["Survived"].mean()
print(f"\nQ4. Survival by gender:\n{q4.round(3)}")

# Q5: Avg fare — survivors vs non-survivors
q5 = df.groupby("Survived")["Fare"].mean()
print(f"\nQ5. Avg fare — Died: ${q5[0]:.2f}, Survived: ${q5[1]:.2f}")

# Q6: Passengers traveling alone
alone = df[df["FamilySize"] == 1]
print(f"\nQ6. Passengers traveling alone: {len(alone)} ({len(alone)/len(df):.1%})")
