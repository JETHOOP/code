import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from sklearn.metrics import mean_squared_error

X = np.array([
    [9, 2],
    [10, 3],
    [11, 3],
    [12, 4],
    [13, 4],
    [14, 5]
])

y = np.array([10, 15, 20, 25, 30, 35])

model = LinearRegression()

X_train , X_test, y_train,y_test = train_test_split(
    X,y,test_size=0.2,random_state=42
)

model.fit(X_train,y_train)
print("X_Train" ,X_train)
print("X_Test" ,X_test)
print("y_Train" ,y_train)
print("y_Test" ,X_test)
y_pred = model.predict(X_test)
print("Coeffecients :" ,model.coef_)
print("Intercept :" , model.intercept_)

print(y_test)
print(y_pred)

plt.scatter(X_train , y_train)
plt.show()
