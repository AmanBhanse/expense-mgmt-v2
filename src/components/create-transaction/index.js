import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const CreateTransaction = ({ allTransactions, setAllTransactions }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [attachments, setAttachments] = useState([]);

    useEffect(() => {
        console.log({ title, type, amount, category, description, attachments });
    }, [title, type, amount, category, description, attachments]);

    useEffect(() => {
        const attach = async () => {
            for (const attachment of attachments) {
                const blob = await attachment.arrayBuffer();
                console.log(blob);
            }
        };
        attach();
    }, [attachments]);

    const saveAndRegister = () => {
        // save to db
        const id = uuidv4()
        console.log(id)
        setAllTransactions([
            ...allTransactions,
            {
                created: new Date(),
                title,
                isIncome: type === "Income",
                amount,
                category,
                description,
                attachments,
                id
            },
        ]);
    };

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Create Transaction
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
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
                                    defaultValue="Choose Category"
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
                                    defaultValue="Choose Transaction Type"
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
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={saveAndRegister}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
