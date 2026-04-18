import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

# Load Titanic
url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df = pd.read_csv(url)

# Set a clean style — do this once at the top of every notebook
sns.set_theme(style="darkgrid", palette="muted")
# Heatmap — correlation between numerical columns
# Correlation tells you how much two variables move together
# +1 = perfect positive, -1 = perfect negative, 0 = no relationship

numeric_cols = df[["Survived", "Pclass", "Age", "SibSp", "Parch", "Fare"]]
corr_matrix = numeric_cols.corr()

# Pairplot — scatter plots for every pair of numerical columns
# Great for spotting relationships quickly across the whole dataset
cols = ["Survived", "Pclass", "Age", "Fare"]
sns.pairplot(df[cols].dropna(), hue="Survived",
             plot_kws={"alpha": 0.5})
plt.suptitle("Pairplot — Titanic", y=1.02)
plt.show()
# This takes a few seconds — it creates many plots at once
