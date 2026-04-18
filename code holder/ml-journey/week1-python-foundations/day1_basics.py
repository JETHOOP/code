"""
Day 1 — Python Basics
Topics: Variables, data types, lists, loops, functions, mini project
"""

# ── SECTION 1: Variables & Data Types ──────────────────────────────────────

name = "Mohit"
age = 21
gpa = 8.5
is_student = True

print("=== Variables ===")
print(f"Name: {name}, Age: {age}, GPA: {gpa}, Student: {is_student}")


# ── SECTION 2: String Operations ───────────────────────────────────────────

course = "machine learning"
print("\n=== String Operations ===")
print(course.upper())
print(course.replace("machine", "deep"))
print(f"Length: {len(course)}")


# ── SECTION 3: Lists ────────────────────────────────────────────────────────

skills = ["python", "numpy", "pandas"]
skills.append("matplotlib")

print("\n=== Lists ===")
print(f"First: {skills[0]}, Last: {skills[-1]}")
for skill in skills:
    print(f"  → {skill}")


# ── SECTION 4: If / Else ────────────────────────────────────────────────────

print("\n=== If/Else ===")
score = 85
if score >= 90:
    print("A grade")
elif score >= 75:
    print("B grade")
else:
    print("Keep practicing")


# ── SECTION 5: Loops ────────────────────────────────────────────────────────

print("\n=== While Loop ===")
count = 1
while count <= 5:
    print(f"  Day {count}")
    count += 1


# ── SECTION 6: Functions ────────────────────────────────────────────────────

def greet(name):
    """Return a greeting message."""
    return f"Hello {name}, welcome to your ML journey!"

def add(a, b):
    """Return sum of two numbers."""
    return a + b

def is_even(num):
    """Return True if number is even."""
    return num % 2 == 0

print("\n=== Functions ===")
print(greet("Mohit"))
print(f"3 + 7 = {add(3, 7)}")
print(f"Is 4 even? {is_even(4)}")


# ── MINI PROJECT: Grade Calculator ─────────────────────────────────────────

def calculate_grade(marks):
    """Return letter grade based on marks."""
    if marks >= 90:   return "A"
    elif marks >= 75: return "B"
    elif marks >= 60: return "C"
    else:             return "F"

subjects = {
    "Math": 88,
    "Python": 95,
    "Statistics": 72,
    "English": 65
}

print("\n=== Mini Project: Grade Calculator ===")
for subject, marks in subjects.items():
    grade = calculate_grade(marks)
    print(f"  {subject}: {marks} marks → Grade {grade}")
