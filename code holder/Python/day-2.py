# student = {
#     "name": "john doe",
#     "age": 25,
#     "skills": ["python", "data analysis", "machine learning"],
#     "is_enrolled": True
# }
# print(student['name'])
# print(student.get("gpa" , "not found")) 
# # not found is the default value if the key is not present in the dictionary

# # adding and updating
# student["GPA"] = 3.8
# student["age"] = 22
# print(student.get("GPA" , "not found"))
# #3.8
# print(student.get("age" , "not found"))
# #22

# #deleting
# del student["is_enrolled"]

# print(student)
# {'name': 'john doe', 'age': 22, 'skills': ['python', 'data analysis', 'machine learning'], 'GPA': 3.8}

# for k , v in student.items():
#     print(f"{k} : {v}")

# if "name" in student:
#     print("name is present in the student dictionary")


# # *args — accept any number of arguments
# def total_score(*scores):
#     return sum(scores)

# print(total_score(88, 95, 72, 65))    # 320

# # **kwargs — accept any number of keyword arguments
# def display_profile(**info):
#     for key, value in info.items():
#         print(f"{key}: {value}")

# display_profile(name="Mohit", age=21, goal="AI Engineer")

# #lambda functions
# square = lambda x : x**2
# print(square(5))  # 25

# # Error handling — critical for real projects
# def divide(a, b):
#     try:
#         result = a / b
#         return result
#     except ZeroDivisionError:
#         return "Error: Cannot divide by zero"
#     except TypeError:
#         return "Error: Please pass numbers only"
#     finally:
#         print("divide() was called")   # Always runs

# print(divide(10, 2))     # 5.0
# print(divide(10, 0))     # Error: Cannot divide by zero
# print(divide(10, "a"))   # Error: Please pass numbers only

