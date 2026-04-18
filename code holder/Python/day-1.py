# String operations
name = "machine learning"

print(name.upper())
print(name.replace("a", "deep"))
print(len(name))

# lists 
skills = ["python" , "numpy" , 'pandas']
skills.append("matplotlib")
print(skills[0])
print(skills[-2])

#if-else
marks = 95
if(marks>90):
    print("A grade")
elif(marks>80):
    print("B grade")
else:print("C grade")

#for loop
for s in skills:
    print(s)

#while loop
count = 1
while(count<=5):
    print(count)
    count+=1

# Functions
def greet(name):
    return f"hello {name} , welcome to your ml journey"

def add(a,b):
    return a+b

def is_even(num):
    return num%2 == 0

print(greet("Mohit")) 
print(add(-2,5))
print(is_even(4))

