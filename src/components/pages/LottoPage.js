import React from 'react';
import Temp1 from "../templates/Temp1";
import Lotto from "../lotto";
import Hello from "../Hello";

const LottoPage = () => {
    return (
        <Temp1 msg ={"Hello This is Lotto Page"}>
            {/*<Hello/>*/}
            <Lotto></Lotto>
        </Temp1>
    );
};

export default LottoPage;