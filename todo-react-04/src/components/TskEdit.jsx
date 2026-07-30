import { useState } from "react";
import "./css/tskItem.css";

function TskEdit({ tskName, cancelFunc, doneFunc }) {
    const [editValue, setEditValue] = useState("");
    return (
        <div className="tskItem">
            <input
                type="text"
                placeholder={tskName}
                value={editValue}
                onChange={(e) => {
                    setEditValue(e.target.value);
                }}
            />
            <div className="btnWrap">
                <button
                    className="addbtn"
                    onClick={() => {
                        doneFunc(editValue);
                    }}
                >
                    完了
                </button>
                <button
                    className="removeBtn"
                    onClick={(e) => {
                        cancelFunc();
                    }}
                >
                    キャンセル
                </button>
            </div>
        </div>
    );
}

export default TskEdit;
