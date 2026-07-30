import "./css/tskItem.css";

function TskItem({ tskName }) {
    return (
        <div className="tskItem">
            <h2>{tskName}</h2>
            <div className="btnWrap">
                <button className="addbtn">完了</button>
                <button className="removeBtn">削除</button>
                <button className="editBtn">編集</button>
            </div>
        </div>
    );
}

export default TskItem;
