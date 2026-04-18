import numpy as np
from sklearn.neighbors import KNeighborsClassifier

# Features: [Study Hours, Sleep]
X = np.array([
    [2, 5],
    [3, 6],
    [4, 6],
    [5, 7],
    [6, 8],
    [7, 8]
])

# Target
y = np.array([0, 0, 0, 1, 1, 1])

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

pred = model.predict([[5, 7]])
print("Prediction:", pred[0])


from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([
    [1, 10000],
    [2, 20000],
    [3, 30000],
    [4, 40000]
])

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print(X_scaled)

from sklearn.metrics import confusion_matrix, precision_score, recall_score, f1_score

y_test = [1, 0, 1, 1, 0, 1]
y_pred = [1, 0, 0, 1, 0, 1]

print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
print("Precision:", precision_score(y_test, y_pred))
print("Recall:", recall_score(y_test, y_pred))
print("F1 Score:", f1_score(y_test, y_pred))