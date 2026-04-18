import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import numpy as np
from sklearn.linear_model import LogisticRegression

# Features: [Study Hours]
X = np.array([[1], [2], [3], [4], [5], [6]])

# Target: Pass (1) / Fail (0)
y = np.array([0, 0, 0, 1, 1, 1])

model = LogisticRegression()
model.fit(X, y)

# Predict
pred = model.predict([[3.5]])
print("Prediction:", pred[0])
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LogisticRegression()
model.fit(X_test, y_test)
y_pred = model.predict(X_train)

# Predict
pred = model.predict([[3.5]])
print(model.predict_proba([[3.5]]))
from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, y_pred)
print(cm)
print("Prediction:", pred[0])