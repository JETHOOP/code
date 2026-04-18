"""
Day 2 — Dictionaries, Functions Deep Dive & File Handling
Topics: Dicts, nested dicts, dict comprehension, *args/**kwargs,
        lambda, try/except, file read/write, mini project
"""

# ── SECTION 1: Dictionary Basics ───────────────────────────────────────────

student = {
    "name": "Mohit",
    "age": 21,
    "skills": ["python", "sql", "javascript"],
    "score": 88.5
}

print("=== Dictionary Basics ===")
print(student["name"])
print(student["skills"][0])
print(student.get("gpa", "Not found"))

student["gpa"] = 9.1
student["age"] = 22
del student["score"]

for key, value in student.items():
    print(f"  {key} → {value}")


# ── SECTION 2: Nested Dictionaries ─────────────────────────────────────────

ml_roadmap = {
    "month1": {"topic": "Python & Math", "weeks": 4, "done": False},
    "month2": {"topic": "Classical ML",  "weeks": 4, "done": False}
}

print("\n=== Nested Dictionary ===")
print(ml_roadmap["month1"]["topic"])
ml_roadmap["month1"]["done"] = True
print(ml_roadmap["month1"])


# ── SECTION 3: Dictionary Comprehension ────────────────────────────────────

scores = {"math": 88, "python": 95, "stats": 72, "english": 65}

print("\n=== Dict Comprehension ===")
passing = {sub: score for sub, score in scores.items() if score >= 75}
print(f"Passing subjects: {passing}")

squared = {k: v**2 for k, v in scores.items()}
print(f"Squared scores: {squared}")


# ── SECTION 4: Functions Deep Dive ─────────────────────────────────────────

def introduce(name, role="ML Engineer", country="India"):
    """Return introduction string with default arguments."""
    return f"Hi, I'm {name}, a {role} from {country}"

print("\n=== Default Arguments ===")
print(introduce("Mohit"))
print(introduce("Mohit", "Data Scientist"))
print(introduce("Mohit", country="USA"))


def total_score(*scores):
    """Return sum of any number of scores."""
    return sum(scores)

def display_profile(**info):
    """Display key-value profile information."""
    for key, value in info.items():
        print(f"  {key}: {value}")

print("\n=== *args and **kwargs ===")
print(f"Total: {total_score(88, 95, 72, 65)}")
display_profile(name="Mohit", age=21, goal="AI Engineer")


# ── SECTION 5: Lambda Functions ────────────────────────────────────────────

square = lambda x: x ** 2
add    = lambda a, b: a + b

print("\n=== Lambda Functions ===")
print(f"Square of 5: {square(5)}")
print(f"3 + 7 = {add(3, 7)}")

students = [
    {"name": "Mohit", "score": 88},
    {"name": "Aryan", "score": 95},
    {"name": "Riya",  "score": 72}
]
sorted_students = sorted(students, key=lambda x: x["score"], reverse=True)
print("Sorted by score:")
for s in sorted_students:
    print(f"  {s['name']} → {s['score']}")


# ── SECTION 6: Error Handling ───────────────────────────────────────────────

def divide(a, b):
    """Divide a by b with error handling."""
    try:
        return a / b
    except ZeroDivisionError:
        return "Error: Cannot divide by zero"
    except TypeError:
        return "Error: Please pass numbers only"
    finally:
        pass  # always runs — use for cleanup

print("\n=== Error Handling ===")
print(divide(10, 2))
print(divide(10, 0))
print(divide(10, "a"))


def set_age(age):
    """Set age with validation."""
    if age < 0 or age > 120:
        raise ValueError(f"Invalid age: {age}. Must be between 0 and 120.")
    return f"Age set to {age}"

try:
    print(set_age(25))
    print(set_age(-5))
except ValueError as e:
    print(f"Caught error: {e}")


# ── SECTION 7: File Handling ────────────────────────────────────────────────

print("\n=== File Handling ===")

# Write
with open("students.txt", "w") as f:
    f.write("Mohit,88,Python\n")
    f.write("Aryan,95,ML\n")
    f.write("Riya,72,Stats\n")
print("File written.")

# Append
with open("students.txt", "a") as f:
    f.write("Priya,91,Deep Learning\n")
print("File appended.")

# Read and parse into list of dicts
students_data = []
with open("students.txt", "r") as f:
    for line in f:
        parts = line.strip().split(",")
        students_data.append({
            "name":    parts[0],
            "score":   int(parts[1]),
            "subject": parts[2]
        })

print("Parsed students:")
for s in students_data:
    print(f"  {s}")


# ── MINI PROJECT: Student Report Generator ──────────────────────────────────

scores_list = [s["score"] for s in students_data]
average     = sum(scores_list) / len(scores_list)
top         = max(students_data, key=lambda x: x["score"])
bottom      = min(students_data, key=lambda x: x["score"])

report = f"""
=== Student Report ===
Total Students   : {len(students_data)}
Average Score    : {average:.2f}
Top Scorer       : {top['name']} ({top['score']})
Needs Improvement: {bottom['name']} ({bottom['score']})
======================
"""

print("\n=== Mini Project: Student Report ===")
print(report)

with open("report.txt", "w") as f:
    f.write(report)
print("Report saved to report.txt")
