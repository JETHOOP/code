import numpy as np
from sklearn.tree import DecisionTreeClassifier

X = np.array([
    [20, 600 , 10],
    [25, 650, 15],
    [30, 700, 14],
    [35, 720, 13],
    [40, 750, 12],
    [45, 800, 18]
])

# Loan Approved (1) / Rejected (0)
y = np.array([0, 0, 1, 1, 1, 1])

model = DecisionTreeClassifier(max_depth=1)
model.fit(X,y)

pred =  model.predict([[28,600,10]])

print("Loan Approval" , pred[0])

from sklearn.tree import plot_tree
import matplotlib.pyplot as plt

plt.figure(figsize=(10,6))
plot_tree(model, filled=True)
plt.show()