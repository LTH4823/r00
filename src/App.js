
import HelloName from "./components/HelloName";
import ShowOddEven, {makeResult} from "./components/ShowOddEven";
import LottoResult from "./components/lotto/LottoResult";
import LottoHeader from "./components/lotto/LottoHeader";


function App() {

    const target = parseInt(Math.random()* 1000)

    const temp = makeResult(target)

    return (
        <div>
            <LottoHeader/>
            <LottoResult/>
        </div>
    );
}

export default App;
