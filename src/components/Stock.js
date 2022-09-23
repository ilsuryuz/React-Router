import React from "react";

const Stock = (props) => {
    const symbol = props.match.params.symbol;
    const data = props.stockData;
    const index = data.findIndex(object => {
        return object.symbol === symbol;
    })
    const stock = data[index]


    const keys = Object.keys(stock)
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    {keys.map((key) => {
                        return <th>{key}</th>
                    })}
                </tr>
                <tr>
                    {keys.map((key) => {
                        return (
                            <td>{stock[key]}</td>
                        )
                    })}
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Stock;