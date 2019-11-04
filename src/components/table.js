import React from 'react';

class Table extends React.Component {

    render() {
        const jsonData = this.props.data;
        return (

                <table className="jsonAudits">
                    <caption>Test wokr by Evgeniy Babiychuk (093-589-50-84)</caption>
                    <tr>
                        <th className="thNumber">Number</th>
                        <th className="thNameAudit">Name audit</th>
                        <th className="thMode">Mode</th>
                        <th className="thScoreAudit">Score audit</th>
                    </tr>
                {
                    Object.keys(jsonData).map((keyName,key) => (
                        <tr key={jsonData[keyName].id} className={key % 2 == 0 ? "even" : "odd"}>
                            <td>{key+1}</td>
                            <td title={jsonData[keyName].description}>{jsonData[keyName].title}</td>
                            <td>{jsonData[keyName].scoreDisplayMode}</td>
                            <td>{jsonData[keyName].score == null ? 0 : jsonData[keyName].score}</td>
                        </tr>
                    ))
                }
                </table>

        );
    }
}

export default Table;
