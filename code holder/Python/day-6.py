import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

#STEP 1 
sns.set_theme(style="darkgrid" , palette="muted")
url = "https://raw.githubusercontent.com/selva86/datasets/master/BostonHousing.csv"
df = pd.read_csv(url)

# print("Shape:" , df.shape)
# print("\nColumns" , df.columns.tolist())
# print(df.head())

# print("="*50)
# print("STEP 1: BASIC INFO")
# print("="*50)
# print(f"Rows : {df.shape[0]} , Columns : {df.shape[1]}")
# print("\n DATA Types:")
# print(df.dtypes)


# # STEP 2
# print("="*50)
# print("STEP 2: MISSING VALUE")
# print("="*50)
# missing = df.isnull().sum()
# missing_pct = (df.isnull().sum()/len(df))*100
# missing_df = pd.DataFrame({
#     "Missing Count": missing,
#     "Missing %":missing_pct.round(2)
# })

# print(missing_df[missing_df["Missing Count"] > 0])
# print("No missing Values!" if missing.sum()==0 else f"Total Missing : {missing.sum()}")

# # STEP 3 statistical summary
# print("="*50)
# print("STEP 3: STATISTICAL SUMMARY")
# print("="*50)
# print(df.describe().round(2))

# # STEP 4 Distribution of target variable
# print("="*50)
# print("STEP 4: TARGET VARIABLE ANALYSIS")
# print("="*50)
# print(f"Mean House Price: ${df["medv"].mean()*1000:.0f}")
# print(f"Median House Price: ${df["medv"].median()*1000:.0f}")
# print(f"Min House Price: ${df["medv"].min()*1000:.0f}")
# print(f"Max House Price: ${df["medv"].max()*1000:.0f}")
# print(f"Std deviation: ${df["medv"].std()*1000:.0f}")

# print(f"\nSkewness of medv: {df["medv"].skew():.2f}")
# print("(0 = normal, >1 = right skewed, <-1 = left skewed)")

# # Step 5 — Correlation analysis
# print("="*50)
# print("STEP 5: CORRELATION WITH HOUSE PRICE")
# print("="*50)
# correlations = df.corr()["medv"].sort_values(ascending=False)
# print(correlations.round(2))

# # Step 6 — Full correlation heatmap
# fig , ax = plt.subplots(figsize=(5,5))
# sns.heatmap(
#     df.corr(),
#     annot=True,
#     fmt=".2f",
#     cmap="coolwarm",
#     linewidth = 0.5,
#     ax=ax
# )
# ax.set_title("Feature Correlation Heatmap")
# plt.tight_layout()
# plt.savefig("correlation_heatmap.png", dpi=150, bbox_inches="tight")
# plt.show()

# # Step 7 — Top features vs house price (scatter plots)
# top_features = ["rm", "lstat", "ptratio", "crim"]
# labels = {
#     "rm":      "Avg Rooms per House",
#     "lstat":   "% Lower Status Population",
#     "ptratio": "Pupil-Teacher Ratio",
#     "crim":    "Crime Rate"
# }

#Step 8 - Distribution Plots for all features   

# fig , axes = plt.subplots(4,4,figsize=(10,10))
# axes = axes.flatten()

# for i , col in enumerate(df.columns):
#     axes[i].hist(df[col], bins=25 , color="#2ecc71" , edgecolor="white" , alpha=0.8)
#     axes[i].set_title(col,fontsize=10)
#     axes[i].set_xlabel("")
    
    
# plt.subtitle("Distrubition of All features")
# plt.tight_layout()
# plt.show()

# Outlier detection using IQR method

# def detect_outlier(df,column):
#     Q1 = df[column].quantile(0.25)
#     Q3 = df[column].quantile(0.75)
#     IQR = Q3- Q1
#     lower = Q1 - 1.5 * IQR
#     upper = Q1 + 1.5 * IQR
#     outliers = df[(df[column]<lower) | (df[column]>upper)]
#     return len(outliers) , lower , upper

# for col in ["medv" , "crim" , "rm" , "lstat"]:
#     count , low,high = detect_outlier(df, col)
#     print(f"{col:10}: {count:3} outliers | range: [{low:.2f}, {high:.2f}]")
    
#step 10 prices segmentation analysis

# Step 10 — Price segmentation analysis
print("="*50)
print("STEP 10: PRICE SEGMENTS")
print("="*50)

df["price_segment"] = pd.cut(
    df["medv"],
    bins=[0, 15, 25, 35, 100],
    labels=["Budget", "Mid-Range", "Premium", "Luxury"]
)

segment_analysis = df.groupby("price_segment").agg({
    "rm":     "mean",
    "crim":   "mean",
    "lstat":  "mean",
    "medv":   "count"
}).round(2)

segment_analysis.columns = ["Avg Rooms", "Avg Crime", "Avg Low Status %", "Count"]
print(segment_analysis)

