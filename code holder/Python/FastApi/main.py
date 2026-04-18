import numpy as np
from sklearn.linear_model import LinearRegression
import joblib
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# x = np.array([[1],[2],[3],[4],[5]])
# y = np.array([2,4,6,8,10])

# model = LinearRegression()
# model.fit(x,y)

# joblib.dump(model , "model.pkl")
# print("model trained and savev successfully!")

# model = joblib.load("model.pkl")

# class Input(BaseModel):
#     value: float

# @app.post("/predict")
# def predict(data: Input):
#     prediction = model.predict(np.array([[data.value]]))
#     return {"prediction": prediction.tolist()}

x = np.array([[1000,2] , [1200,2] , [1300,3] , [1500,5]])
y = np.array([1,2,3,4])

model = LinearRegression()
model.fit(x,y)

joblib.dump(model ,"model2.pkl")

model = joblib.load("model2.pkl")

class Predict(BaseModel):
    area:int
    bedrooms:int

@app.post("/predict")
def predi(predict:Predict):
    prediction = model.predict(np.array([[predict.area, predict.bedrooms]]))
    return {"prediciton":prediction.tolist()}