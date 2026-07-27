import { useState, createContext } from "react";
import { IMoneyUser } from "./IMoneyUser";
import { UserContext } from './userProvider';
import { MoneyCalculationComponent } from './moneyCalculation.component'


const MoneyPage = () => {

    return (
        <>
            <UserContext.Provider value={'kol' }>
                <MoneyCalculationComponent/>
            </UserContext.Provider>
        </>
    )
}
export default MoneyPage;