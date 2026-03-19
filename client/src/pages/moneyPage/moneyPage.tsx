import { useState } from "react";
//import { useTranslation } from 'react-i18next';
interface Props {}

const nominals:number[] =[50,100,200,500,1000,2000,5000]

const MoneyPage = (props: Props) => {

    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState<string[]>([]);

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {

        setAmount(+e.target.value);
    }

    const handleSubmit = () => {
        const atmResult = atm(amount, nominals);
        
        if (atmResult!=undefined) {
            setResult(atmResult);
        }
    }

    function atm(amount: number, nominals: number[]) {
 
        if (!amount) {
            return [];
        }
        let rest = amount;
 
        const result = nominals.reduceRight((acc, nominal) => {
            const amountByNominal = Math.floor(rest / nominal);
 
            if (amountByNominal) {
                const amountToSub = amountByNominal * nominal;
                rest -= amountToSub;
 
                acc.push(`${nominal}x${amountByNominal}`);
            }
            return acc;
        }, [] as string[])
 
        return result;
    }

  

    return (
        <>
            <div>Money</div>
            <div>
                <img alt="money" src="/pony/money.jpg" height="100px" />
            </div>
            <div>
                Купюры:
                <ul>
                    {nominals.map((value => {
                        return <li key={value}>{value}</li>
                    }))}
                </ul>
                Наберите сумму и пойдет расчет купюр для выдачи.
            </div>
            <div>
                <input type="number" name="amount" value={amount} onChange={handleChangeAmount} />
                <button onClick={handleSubmit}>Get money</button>
                <div>Resut:</div>
                <ul>
                    {result.map((value => {
                        return <li key={value}>{ value }</li>
                    }))}
                </ul>
            </div>
        </>
    )
}
export default MoneyPage;