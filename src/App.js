import ShowOddEven, {makeResult} from "./components/ShowOddEven";
import InputEx from "./components/inputEx";
import InputEx2 from "./components/inputEx2";


function App() {

    const target = parseInt(Math.random()* 1000)

    const temp = makeResult(target)

    return (
        <div>
            <InputEx></InputEx>
            <InputEx2 str={'Hello'}></InputEx2>
        </div>
    );
}

export default App;
