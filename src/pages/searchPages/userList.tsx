import { useMemo } from "react";

const UserList = (props:any) => {

    const userRenderList = useMemo(() => {
        return Array.from(props.userList);

    }, [props.userList])

    console.log(" userRenderList = ", userRenderList);

    return (
        <>
            <ul>
                {userRenderList.map((a:any) => { 
                    return (<li key={a.name}>{a.name}</li>)

                }) }
            </ul>

        </>
    )
}
export default UserList;