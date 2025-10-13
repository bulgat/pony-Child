import { useState } from "react";

interface Props {}

const nominals =[50,100,200,500,1000,2000,5000]

const MoneyPage = (props: Props) => {

    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState<string[]>([]);

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {

        setAmount(+e.target.value);
    }

    const handleSubmit = () => {
        console.log(amount, " e  ==", nominals);
        const atmResult = atm(amount, nominals);
        
        if (atmResult!=undefined) {
            setResult(atmResult);
        }
    }

    function atm(amount: number, nominals: number[]) {
        console.log("0000 amount  ==", amount, "  nominals =", nominals);
        if (!amount) {
            return [];
        }
        let rest = amount;
        console.log("0001 e  ==", amount, "  nominals =", nominals);
        const result = nominals.reduceRight((acc, nominal) => {
            const amountByNominal = Math.floor(rest / nominal);
            console.log("0003 rest = ", rest, "  nominal = ", nominal,"  amountByNominal  = ", amountByNominal);
            if (amountByNominal) {
                const amountToSub = amountByNominal * nominal;
                rest -= amountToSub;
                console.log("0004  ==", rest);
                acc.push(`${nominal}x${amountByNominal}`);
            }
            return acc;
        }, [] as string[])
        console.log("0002  ==", result);
        return result;
    }

    return (
        <>
            <div>Money</div>
            <div>
                <img alt="money" src="/pony/money.jpg" height="100px" />
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