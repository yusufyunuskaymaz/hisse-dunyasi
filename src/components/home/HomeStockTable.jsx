import Table from 'react-bootstrap/Table';
import axios from "axios";
import React, { useEffect, useState } from "react";

function StockTable() {
    const [data, setData] = useState([])

    const getDataFromApi = () => {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: process.env.REACT_APP_TOKEN,
          },
        };
        axios
          .get("https://api.collectapi.com/economy/borsaIstanbul", config)
          .then((res) => {
            const data = res.data.result[0];
            setData(data)
          });
      };
    
      useEffect(() => {
        getDataFromApi()
      }, [])
    
      // console.log(data,"borsa")
  return (
    <div className=''
    style={{width:"85%"}}
    >
      <Table  bordered variant='light' hover >
      <thead>
        <tr>
          <th colSpan={4} className="fs-4 text-center">Borsa İstanbul Verileri</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2} className="fs-4">Son</td>
          <td colSpan={2} className="fs-4 text-success">{data.current}</td>

        </tr>
        <tr>
          <td colSpan={2}>Açılış</td>
          <td colSpan={2}>{data.opening}</td>

        </tr>
        <tr>
          <td colSpan={2}>Kapanış</td>
          <td colSpan={2}>{data.closing}</td>

        </tr>
        <tr>
          <td colSpan={2}>Min</td>
          <td colSpan={2}>{data.min}</td>

        </tr>
        <tr>
          <td colSpan={2}>Max</td>
          <td colSpan={2}>{data.max}</td>

        </tr>
        <tr>
          <td colSpan={2}>Oran</td>
          <td colSpan={2}>{data.changerate}</td>

        </tr>
        <tr>
          <td colSpan={2}>Saat</td>
          <td colSpan={2}>{data.time}</td>

        </tr>

      </tbody>
    </Table>
    </div>
  );
}

export default StockTable;