import { useEffect, useState } from "react";

export const EditTransactionPopup = ({ transactionID, allTransactions, setAllTransactions, setShowEditPopup }) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [attachments, setAttachments] = useState([]);
    useEffect(() => {

        const transactionDetails = allTransactions.find((transaction) => transaction.id === transactionID);

        setTitle(transactionDetails.title)
        setAmount(transactionDetails.amount)
        setType(transactionDetails.type)
        setCategory(transactionDetails.category)
        setDescription(transactionDetails.description)
        setAttachments(transactionDetails.attachments)

        // Initialize and control the modal visibility using Bootstrap's modal methods
        const modalElement = document.getElementById('editTransactionModal');
        if (modalElement) {
            const modal = new window.bootstrap.Modal(modalElement);
            modal.show(); // Show the modal on render
            return () => {
                modal.hide(); // Clean up and hide modal when component is unmounted
            };
        }
    }, []);

    const handleEditClick = () => {
        // Find the transaction to update
        const updatedTransaction = {
            id: transactionID,
            title,
            amount,
            type,
            category,
            description,
            attachments: Array.from(attachments), // Convert FileList to an array if needed
        };

        // Update the transaction in the allTransactions array
        const updatedTransactions = allTransactions.map(transaction => 
            transaction.id === transactionID ? { ...transaction, ...updatedTransaction } : transaction
        );

        // Update the state with the updated transactions
        setAllTransactions(updatedTransactions);

        // Hide the modal
        setShowEditPopup(false);
    }

    return (
        <div
            className="modal fade"
            id="editTransactionModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Transaction</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setShowEditPopup(false)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* Add your form fields here */}
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Title</label>
                                <input
                                    className="form-control"
                                    value={title}
                                    onChange={event => setTitle(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <input
                                    className="form-control"
                                    value={description}
                                    onChange={event => setDescription(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Amount</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={amount}
                                    onChange={event => setAmount(event.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Category</label>
                                <select
                                    className="form-select"
                                    onChange={event => setCategory(event.target.value)}
                                    defaultValue={category}
                                >
                                    <option disabled>Choose Category</option>
                                    <option>Food</option>
                                    <option>Travel</option>
                                    <option>Leisure</option>
                                    <option>Business</option>
                                    <option>Miscellaneous</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Transaction Type</label>
                                <select
                                    className="form-select"
                                    onChange={event => setType(event.target.value)}
                                    defaultValue={type}
                                >
                                    <option disabled>Choose Transaction Type</option>
                                    <option>Expense</option>
                                    <option>Income</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Attachments</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    multiple
                                    onChange={event => setAttachments(event.target.files)}
                                    defaultValue={attachments}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                            onClick={() => setShowEditPopup(false)} // Hide modal
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={ ()=> {handleEditClick()}}

                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
