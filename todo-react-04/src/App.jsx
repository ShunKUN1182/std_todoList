import "./App.css";
import TskItem from "./components/TskItem";
import TskEdit from "./components/TskEdit";

function App() {
    return (
        <div id="content">
            <h1>ToDoリスト</h1>
            <form>
                <input type="text" placeholder="タスクを追加" />
                <button type="button">追加</button>
            </form>
            <div className="tskWrap">
                <TskItem tskName="あいうえお" />
            </div>
        </div>
    );
}

export default App;
