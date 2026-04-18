# import numpy as np


# # Pure group — all survived
# print(f"All survived   : {gini_impurity([1,1,1,1,1]):.2f}")  # 0.0

# # Mixed group — 50/50
# print(f"50/50 split    : {gini_impurity([0,0,0,1,1,1]):.2f}")  # 0.5

# # Mostly one class
# print(f"Mostly survived: {gini_impurity([1,1,1,1,0]):.2f}")    # low
# print(f"Mostly died    : {gini_impurity([0,0,0,0,1]):.2f}")  
# # Internel things of how the gini index works internelly

# import numpy as np
# def entropy(classes):
#     total = len(classes)
#     if total == 0 :
#         return 0
#     classes = np.array(classes)
#     probs = [np.sum(classes ==c)/total for c in np.unique(classes)]
#     return -sum(p*np.log2(p+1e-10)for p in probs)

# print(f"Entropy all same  : {entropy([1,1,1,1,1]):.2f}")   # 0.0
# print(f"Entropy 50/50     : {entropy([0,0,0,1,1,1]):.2f}") # 1.0
# print(f"Entropy 80/20     : {entropy([1,1,1,1,0]):.2f}")   # low

# import numpy as np
# def gini_impurity(classes):
#     total = len(classes)
#     if total ==0 :
#         return 0 
#     classes = np.array(classes)
#     probs = [np.sum(classes == c)/total for c in np.unique(classes)]
#     return 1 - sum(p**2 for p in probs)

# def information_gain(parent , left , right):
#     n = len(parent)
#     n_left = len(left)
#     n_right = len(right)
#     gain = (gini_impurity(parent)) - (n_left/n) * gini_impurity(left) - (n_right/n) * gini_impurity(right)
#     return gain

# all_passengers  = [0,0,0,1,1,0,1,0,0,1]  # 0=died, 1=survived
# male_passengers = [0,0,0,0,0,0]            # mostly died
# female_passengers = [1,1,1,1]  # mostly survived

# gain = information_gain(all_passengers , male_passengers , female_passengers)
# print(f"Information gain from Sex split: {gain:.4f}")


import numpy as np
import pandas as pd
import matplotlib.pylab as plt
import seaborn as sns
from sklearn.tree import DecisionTreeClassifier , plot_tree , export_text
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import (accuracy_score, classification_report, confusion_matrix)

sns.set_theme(style="darkgrid")

url="https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df = pd.read_csv(url)

df["Age"] = df["Age"].fillna(df["Age"].median())
df["Embarked"] = df["Embarked"].fillna(df["Embarked"].mode()[0])
df = df.drop(columns=["Cabin" , "Name" , "Ticket" ,"PassengerId"])
df["FamilySize"] = df["SibSp"] + df["Parch"] + 1
df["IsAlone"]    = (df["FamilySize"] == 1).astype(int)
df               = pd.get_dummies(df, columns=["Sex", "Embarked"], drop_first=False)

X = df.drop(columns=["Survived"])
y = df["Survived"]


X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"Train: {X_train.shape}, Test: {X_test.shape}")

tree_simple = DecisionTreeClassifier(max_depth = 3,random_state=42)
tree_simple.fit(X_train ,y_train)

y_pred_simple = tree_simple.predict(X_test)
acc_simple = accuracy_score(y_test ,y_pred_simple )
print(f"Simple tree (depth=3) accuracy: {acc_simple:.4f}")

# fig , ax = plt.subplots(figsize=(20,10))
# plot_tree(
#     tree_simple,
#     feature_names=X.columns.tolist(),  
#     class_names = ["Died","Survived"],
#     filled=True,
#     rounded = True,
#     fontsize=10,
#     ax = ax
#     )
# ax.set_title("Decision Tree — Titanic (depth=3)", fontsize=14)
# plt.tight_layout()
# plt.show()
# # print("Saved: decision_tree.png")

# # rules = export_text(tree_simple, feature_names=X.columns.tolist())
# # print("\n=== Decision Tree Rules ===")
# # print(rules)

# # ── Feature Importance ────────────────────────────────────────

# # Decision trees give feature importance scores
# # = how much each feature reduced impurity across all splits

# importance_df = pd.DataFrame({
#     "Feature":    X.columns,
#     "Importance": tree_simple.feature_importances_
# }).sort_values("Importance", ascending=True)

# # Only show features with importance > 0
# importance_df = importance_df[importance_df["Importance"] > 0]

# fig, ax = plt.subplots(figsize=(9, 6))
# ax.barh(importance_df["Feature"], importance_df["Importance"],
#         color="#3498db", edgecolor="white")
# ax.set_title("Feature Importance — Decision Tree")
# ax.set_xlabel("Importance Score")
# plt.tight_layout()
# plt.show()

# ── The Overfitting Problem ───────────────────────────────────

# Watch what happens as we grow the tree deeper and deeper

train_scores = []
test_scores  = []
depths       = range(1, 21)

# for depth in depths:
#     tree = DecisionTreeClassifier(max_depth=depth, random_state=42)
#     tree.fit(X_train, y_train)
#     train_scores.append(accuracy_score(y_train, tree.predict(X_train)))
#     test_scores.append(accuracy_score(y_test,  tree.predict(X_test)))

# fig, ax = plt.subplots(figsize=(10, 6))
# ax.plot(depths, train_scores, "b-o", markersize=5, label="Train Accuracy")
# ax.plot(depths, test_scores,  "r-o", markersize=5, label="Test Accuracy")
# ax.set_xlabel("Max Depth")
# ax.set_ylabel("Accuracy")
# ax.set_title("Overfitting: Train vs Test Accuracy by Tree Depth")
# ax.legend()
# ax.grid(True, alpha=0.3)
# ax.axvline(x=depths[test_scores.index(max(test_scores))],
#            color="green", linestyle="--",
#            label=f"Best depth: {depths[test_scores.index(max(test_scores))]}")
# ax.legend()
# plt.tight_layout()
# plt.show()

# best_depth = depths[test_scores.index(max(test_scores))]
# print(f"\nBest depth        : {best_depth}")
# print(f"Best test accuracy: {max(test_scores):.4f}")
# print(f"Train accuracy    : {train_scores[best_depth-1]:.4f}")
# Notice: as depth increases train accuracy → 1.0 but test accuracy drops
# That gap between train and test = OVERFITTING

# ── Key Hyperparameters to Control Overfitting ───────────────

# max_depth         — max levels in tree (most important)
# min_samples_split — min samples needed to split a node
# min_samples_leaf  — min samples required in a leaf node
# max_features      — max features to consider for each split

# Train final tuned model
tree_tuned = DecisionTreeClassifier(
    max_depth=5,
    min_samples_split=10,   # don't split if fewer than 10 samples
    min_samples_leaf=5,     # each leaf must have at least 5 samples
    criterion="gini",
    random_state=42
)
tree_tuned.fit(X_train, y_train)
y_pred_tuned = tree_tuned.predict(X_test)
acc_tuned    = accuracy_score(y_test, y_pred_tuned)

print("=== Model Comparison ===")
print(f"Simple tree  (depth=3) : {acc_simple:.4f}")
print(f"Tuned tree   (depth=5) : {acc_tuned:.4f}")
print(f"\nClassification Report (Tuned):")
print(classification_report(y_test, y_pred_tuned,
                             target_names=["Died", "Survived"]))

# ── Confusion Matrix ──────────────────────────────────────────

cm = confusion_matrix(y_test, y_pred_tuned)

fig, ax = plt.subplots(figsize=(6, 5))
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues",
            xticklabels=["Died", "Survived"],
            yticklabels=["Died", "Survived"], ax=ax)
ax.set_title("Confusion Matrix — Tuned Decision Tree")
ax.set_ylabel("Actual")
ax.set_xlabel("Predicted")
plt.tight_layout()
plt.show()