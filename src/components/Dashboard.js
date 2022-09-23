import React from "react";
import { Link } from "react-router-dom";


function Dashboard(props) {
    return (
        <div className="dashboard">
            <table>
                <tbody>
                    <tr>
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                    {props.stockData.map((stock) => {
                        return (
                            <tr>
                            <Link to={`/stocks/${stock.symbol}`}>
                                <td>{stock.name} ({stock.symbol})</td>
                            </Link>
                            <td>{stock.lastPrice}</td>
                                <td>{stock.change * 100}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;