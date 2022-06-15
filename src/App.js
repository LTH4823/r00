import ShowOddEven, {makeResult} from "./components/ShowOddEven";
import Lotto from "./components/lotto";
import Temp1 from "./components/templates/Temp1";
import LottoPage from "./components/pages/LottoPage";


function App() {

    const target = parseInt(Math.random()* 1000)

    const temp = makeResult(target)

    return (
        <div>
            <LottoPage/>
        </div>
    );
}

export default App;
