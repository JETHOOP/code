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
