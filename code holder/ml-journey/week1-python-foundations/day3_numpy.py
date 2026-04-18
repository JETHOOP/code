"""
Day 3 — NumPy: The Engine Behind Every ML Algorithm
Topics: Arrays, 2D matrices, math ops, aggregates,
        boolean masking, reshaping, mini project
"""

import numpy as np


# ── SECTION 1: Why NumPy + Array Basics ────────────────────────────────────

print("=== Python List vs NumPy Array ===")
python_list = [1, 2, 3, 4, 5]
numpy_array = np.array([1, 2, 3, 4, 5])

print(f"List * 2  : {python_list * 2}")       # repeats
print(f"Array * 2 : {numpy_array * 2}")        # math
print(f"Array + 10: {numpy_array + 10}")
print(f"Array ** 2: {numpy_array ** 2}")


# ── SECTION 2: Creating Arrays ──────────────────────────────────────────────

print("\n=== Creating Arrays ===")
a = np.array([1, 2, 3, 4, 5])
b = np.zeros(5)
c = np.ones(5)
d = np.arange(0, 10, 2)
e = np.linspace(0, 1, 5)
f = np.random.randint(0, 100, size=6)

print(f"from list  : {a}")
print(f"zeros      : {b}")
print(f"ones       : {c}")
print(f"arange     : {d}")
print(f"linspace   : {e}")
print(f"random int : {f}")


# ── SECTION 3: Array Properties ─────────────────────────────────────────────

print("\n=== Array Properties ===")
arr = np.array([10, 20, 30, 40, 50])
print(f"shape : {arr.shape}")
print(f"dtype : {arr.dtype}")
print(f"ndim  : {arr.ndim}")
print(f"size  : {arr.size}")


# ── SECTION 4: Indexing & Slicing ───────────────────────────────────────────

print("\n=== Indexing & Slicing ===")
arr = np.array([10, 20, 30, 40, 50, 60, 70])
print(f"arr[0]   : {arr[0]}")
print(f"arr[-1]  : {arr[-1]}")
print(f"arr[1:4] : {arr[1:4]}")
print(f"arr[::2] : {arr[::2]}")
print(f"arr[::-1]: {arr[::-1]}")


# ── SECTION 5: 2D Arrays (Matrices) ─────────────────────────────────────────

print("\n=== 2D Arrays ===")
matrix = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

print(f"shape         : {matrix.shape}")
print(f"first row     : {matrix[0]}")
print(f"element [1,2] : {matrix[1, 2]}")
print(f"first column  : {matrix[:, 0]}")
print(f"top-left 2x2  :\n{matrix[:2, :2]}")


# ── SECTION 6: Matrix Operations ────────────────────────────────────────────

print("\n=== Matrix Operations ===")
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

print(f"a + b (element-wise):\n{a + b}")
print(f"a * b (element-wise):\n{a * b}")
print(f"a @ b (dot product) :\n{a @ b}")
print(f"a.T   (transpose)   :\n{a.T}")


# ── SECTION 7: Aggregate Functions ──────────────────────────────────────────

print("\n=== Aggregate Functions ===")
data = np.array([85, 92, 78, 95, 88, 73, 91, 87])
print(f"sum   : {np.sum(data)}")
print(f"mean  : {np.mean(data):.2f}")
print(f"median: {np.median(data):.2f}")
print(f"std   : {np.std(data):.2f}")
print(f"min   : {np.min(data)}  at index {np.argmin(data)}")
print(f"max   : {np.max(data)}  at index {np.argmax(data)}")


# ── SECTION 8: Axis Operations ───────────────────────────────────────────────

print("\n=== Axis Operations ===")
scores = np.array([
    [85, 92, 78],   # Student 1: Math, Python, Stats
    [95, 88, 91],   # Student 2
    [73, 87, 69]    # Student 3
])

print(f"Mean per subject (axis=0): {np.mean(scores, axis=0)}")
print(f"Mean per student (axis=1): {np.mean(scores, axis=1)}")
print(f"Total per student (axis=1): {np.sum(scores, axis=1)}")


# ── SECTION 9: Reshaping ─────────────────────────────────────────────────────

print("\n=== Reshaping ===")
arr = np.arange(1, 13)
print(f"Original  : {arr}  shape: {arr.shape}")
matrix = arr.reshape(3, 4)
print(f"Reshaped  :\n{matrix}  shape: {matrix.shape}")
flat = matrix.flatten()
print(f"Flattened : {flat}")


# ── SECTION 10: Boolean Masking ──────────────────────────────────────────────

print("\n=== Boolean Masking ===")
scores = np.array([85, 92, 78, 95, 88, 73, 91, 67])

print(f"All scores       : {scores}")
print(f"Above 85         : {scores[scores > 85]}")
print(f"Below 75         : {scores[scores < 75]}")
print(f"Between 80 & 93  : {scores[(scores > 80) & (scores < 93)]}")

# Replace missing values (-1) with mean
data = np.array([85, -1, 78, -1, 88, 73, -1, 87])
valid    = data[data != -1]
mean_val = np.mean(valid)
data[data == -1] = mean_val
print(f"After filling -1 with mean: {data}")


# ── MINI PROJECT: Student Performance Analyser ───────────────────────────────

print("\n=== Mini Project: Student Performance Analyser ===")

scores = np.array([
    [85, 92, 78, 88],
    [91, 87, 95, 83],
    [73, 68, 75, 70],
    [95, 98, 92, 96],
    [60, 72, 65, 58]
])

subjects = ["Math", "Python", "Stats", "English"]
students = ["Mohit", "Aryan", "Riya", "Priya", "Rahul"]

# 1. Average per student
print("\n1. Average score per student:")
avg_per_student = np.mean(scores, axis=1)
for i, name in enumerate(students):
    print(f"   {name}: {avg_per_student[i]:.2f}")

# 2. Average per subject
print("\n2. Average score per subject:")
avg_per_subject = np.mean(scores, axis=0)
for i, sub in enumerate(subjects):
    print(f"   {sub}: {avg_per_subject[i]:.2f}")

# 3. Top scorer
top_index = np.argmax(avg_per_student)
print(f"\n3. Top student: {students[top_index]} ({avg_per_student[top_index]:.2f})")

# 4. Students who failed any subject (below 70) — fixed bug from Day 3
print("\n4. Students needing help:")
for i, name in enumerate(students):
    failed = [subjects[j] for j in range(4) if scores[i][j] < 70]
    if failed:
        print(f"   {name} needs help in: {', '.join(failed)}")

# 5. Normalize scores to 0-1 range
min_score  = np.min(scores)
max_score  = np.max(scores)
normalized = (scores - min_score) / (max_score - min_score)
print("\n5. Normalized scores (0-1):")
print(np.round(normalized, 2))
