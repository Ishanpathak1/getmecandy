import './table.css';
import React from 'react';

const data = [
  { name: "Ishan", Candy: 3, Timestamp: "5/11/22", },
  { name: "Michal", Candy: 5, Timestamp: "5/11/22",  },
  { name: "Shila", Candy: 21, Timestamp: "5/11/22",  },
  { name: "Tom", Candy: 2, Timestamp: "5/11/22", },
  { name: "Ritu", Candy: 15, Timestamp: "5/11/22",},
]

function TableLog() {
  return (
    <div className="App">
      <p className='TransactionLog'>Transaction Log</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Candy</th>
            <th>Timestamp</th>
            
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.name}</td>
                  <td>{value.Candy}</td>
                  <td>{value.Timestamp}</td>
                  
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default TableLog;