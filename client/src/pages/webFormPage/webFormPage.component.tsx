import React, { useState } from "react";

const WebFormPageComponent = () => {
    const [result, setResult] = useState('');

    const hadleSubmit = (formData:any) => {
        console.log('---------', formData.get('login'));
        setResult(formData.get('login'));
    }

        return (
            <>
                <div>WebForm</div>
                <form action={hadleSubmit}>
                    login: <input type='text' name='login' />
                    <button>Send</button>
                </form>
                <br />
                result: {result}
            </>
        )

}
export default WebFormPageComponent;