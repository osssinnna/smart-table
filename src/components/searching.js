import { rules, createComparison, defaultRules } from "../lib/compare.js";

export function initSearching(searchField) {
  // @todo: #5.1 — настроить компаратор

  const compare = createComparison(
    defaultRules.filter((key) => key === "skipEmptyTargetValues"),
    [
      rules.searchMultipleFields(
        searchField,
        ["date", "customer", "seller"],
        false
      ),
    ]
  );
  return (data, state, action) => {
    // @todo: #5.2 — применить компаратор
    return data.filter((row) => compare(row, state));
  };
}
