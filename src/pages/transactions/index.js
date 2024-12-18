import { useEffect, useState } from "react";
import { Transaction } from "../../components/transaction";
import { CreateTransaction } from "../../components/create-transaction";

export const Transactions = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [dateFilter, setDateFilter] = useState({ start: "", end: "" });

  useEffect(() => {
    const filterTransactions = () => {
      let filtered = allTransactions;

      if (categoryFilter) {
        filtered = filtered.filter(
          (transaction) => transaction.category === categoryFilter
        );
      }

      if (dateFilter.start && dateFilter.end) {
        const startDate = new Date(dateFilter.start);
        const endDate = new Date(dateFilter.end);
        filtered = filtered.filter((transaction) => {
          const transactionDate = new Date(transaction.created);
          return transactionDate >= startDate && transactionDate <= endDate;
        });
      }

      setFilteredTransactions(filtered);
    };

    filterTransactions();
  }, [categoryFilter, dateFilter, allTransactions]);

  return (
    <>
      <CreateTransaction
        allTransactions={allTransactions}
        setAllTransactions={setAllTransactions}
      />
      <div className="container-fluid">
        <div className="row lead py-3">
          <div className="col">Overview : Expense & Income</div>
          <div className="col text-end">
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Transaction
            </button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <select
              className="form-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              <option>Food</option>
              <option>Travel</option>
              <option>Leisure</option>
              <option>Business</option>
              <option>Miscellaneous</option>
            </select>
          </div>
          <div className="col-6">
            <div className="d-flex">
              <div className="d-flex flex-row me-3">
                <label htmlFor="startDate" className="form-label me-2">
                  From Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  value={dateFilter.start}
                  onChange={(e) =>
                    setDateFilter({ ...dateFilter, start: e.target.value })
                  }
                />
              </div>
              <div className="d-flex flex-row">
                <label htmlFor="endDate" className="form-label me-2">
                  To Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  value={dateFilter.end}
                  onChange={(e) =>
                    setDateFilter({ ...dateFilter, end: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-hover border rounded">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Dated</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Category</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Attachments</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((expense, index) => (
                  <Transaction
                    key={index}
                    index={index + 1}
                    {...expense}
                    allTransactions={allTransactions}
                    setAllTransactions={setAllTransactions}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p className="text-muted">
              <span className="text-danger">Red rows</span> are expenses,{" "}
              <span className="text-success">Green rows</span> are income.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
