import React from "react";

class TablePage extends React.Component {

    unmount() {
        console.log("0001 sdfgdgdfg");
    }

    componentWillUnmount() {
        console.log("0002dgdfg");
    }

    componentDidMount() {
        console.log("0000 gdgdfg");
    }

    tick() {
        console.log("0003 gdfg");
    }

    render() {
        return (
            <>
                <div>table</div>

            </>
        )
    }
}
export default TablePage;