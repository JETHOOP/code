from fastapi import FastAPI
from fastapi import Request
from pydantic import BaseModel

app = FastAPI()

@app.get("/name")
def intro():
    return "I am Mohit , Learning FastAPI for ML"

@app.get("/about")
def about():
    return "What you are learning FastAPI + Ml"

@app.get("/student/{name}")
def abouts(name: str):
    return name

@app.get("/add/{b}/{a}")
def sum(a : int,b :int):
    return a+b

@app.get("/profile/{name}/{age}")
def profile(name : str , age:int):
    if(age > 18):
        return "Adult"
    else:
        return "Minor"
    
@app.get("/search")
def search(name: str, age: int):
    return {"name": name, "age": age}


# @app.post("/login")
# async def login(request: Request):
#     data = await request.json()
    
#     username = data.get("username")
#     password = data.get("password")

#     return {"message": f"Welcome {username}"}

class User(BaseModel):
    name:str
    city:str

@app.post("/user")
async def user(user : User):
   return {
       "user": User.name,
       "city":User.city
   }
   
   
class Operation(BaseModel):
    op1:int
    op2:int
    
@app.post("/add")
async def add(operation:Operation):
    return operation.op1+operation.op2


class Login(BaseModel):
    name:str
    address:str

@app.post("/login")
async def login(login:Login):
    return Login.name

class Num(BaseModel):
    number : int
    
@app.post("/odd")
async def oddEven(num:Num):
    if(num.number %2 == 0): return "even"
    else: return "odd"
    
class Student(BaseModel):
    name : str
    marks : int
    
@app.post("/student")
async def student(student:Student):
    s_name = student.name
    grade = ""
    if(student.marks>90):
        grade = "A"
    elif(student.marks>80):
        grade = "B"
    else:grade = "c"
    
    return {"name":s_name ,"Grade":grade }

class predict(BaseModel):
    hours_studied : int
    sleep_hours : int

@app.post("/predict")
async def slp(predict:predict):
    if(predict.hours_studied>predict.sleep_hours):
        return "Good Sleep"
    else : return "bad sleep"

# @app.post("user")
# async def user(request:Request):
#     data = await request.json()
    
#     user = data.get("user")
#     city = data.get("city")
    
#     return {"USer":user , "City":city}
