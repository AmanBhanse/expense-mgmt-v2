import { useEffect, useState } from "react";
import { EditTransactionPopup } from "../edit-transaction";

const padStart = (number = 0, length = 2) => {
    return number.toString().padStart(length, "0");
};
const toString = (date = new Date()) => {
    return [date.getDate(), date.getMonth() + 1, date.getFullYear()].map(padStart).join("-");
};

export const Transaction = props => {
    const { index, amount, created, title, description, category, isIncome, attachments, id , allTransactions , setAllTransactions} = props;
    

    const [showEditPopup, setShowEditPopup] = useState(false);

    const deleteTransaction = (id) => {
        // Filter out the transaction with the given ID

        //DB Logic

        const updatedTransactions = allTransactions.filter(
            (transaction) => transaction.id !== id
        );
    
        // Update the state
        setAllTransactions(updatedTransactions);
    }

    return (
        <tr className={isIncome ? "table-success" : "table-danger"}>
            <th scope="row">{index}</th>
            <td title={created.toISOString()}>{toString(created)}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td>
                <button className="btn btn-sm btn-primary">{attachments.length}</button>
            </td>
            <td>
                <button className="btn btn-sm btn-primary btn-danger" onClick={() => { deleteTransaction(id)} }>DELETE</button>
            </td>
            
            <td>
                <button className="btn btn-success" onClick={()=> {setShowEditPopup(!showEditPopup)}}>
                    <i class="bi bi-pencil"></i>
                </button>
            </td>
            {/* Conditionally render the EditTransactionPopup */}
            {showEditPopup && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Transaction</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowEditPopup(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <EditTransactionPopup
                                    transactionID={id}
                                    allTransactions={allTransactions}
                                    setAllTransactions={setAllTransactions}
                                    setShowEditPopup={setShowEditPopup}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </tr>
    );
};
