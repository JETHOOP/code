import numpy as np
import pandas as pd

url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df = pd.read_csv(url)

df_dropped = df.dropna()
print(df_dropped)
df_no_cabin = df.drop(columns=["Cabin"])