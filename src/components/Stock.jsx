import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Stock = () => {
    const [data, setData] = useState([])
    const getData = async ()=>{
        const URL = "https://sore-ruby-chiton-belt.cyclic.app/https://bigpara.hurriyet.com.tr/api/v1/hisse/list"
        const data = await axios.get(URL, 
          {headers:{
            "Access-Control-Allow-Origin": "https://bigpara.hurriyet.com.tr"}})
        setData(data.data.data)

    }
    useEffect(() => {
      getData()
    }, [])
    console.log(data)
    // axios.get(url,{headers:{
    //   Access-Control-Allow-Origin: https://bigpara.hurriyet.com.tr}})

  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <h1>Stock</h1>
                <table
                  className="table table-striped table-hover table-sm"
                //   style={{ width: "15rem" }}
                >
                  <thead>
                    <tr
                      className="text-white"
                      style={{ background: "#464c52" }}
                    >
                      <th scope="col" colSpan="12">
                        BIST100 Tablo
                      </th>
                      
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th scope="col">Menkul Adı </th>
                      <th scope="col">Son</th>
                      <th scope="col">Alış</th>
                      <th scope="col">Yüksek</th>
                      <th scope="col">Düşük</th>
                      <th scope="col">A. ort</th>
                      <th scope="col">%</th>
                      <th scope="col">A. ort</th>
                      <th scope="col">A. ort</th>
                      <th scope="col">Hacim(Lot)</th>
                      <th scope="col">Hacim(Tl)</th>
                      <th scope="col">Son İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item)=>{
                      return (
                        <tr>
                      <th scope="row">{item.kod}</th>
                      <td>3.984</td>
                      <td>3.984</td>
                      <td>10.00</td>
                      <td>18.10</td>
                      <td>3.984</td>
                      <td>3.984</td>
                      <td>10.00</td>
                      <td>18.10</td>
                      <td>3.984</td>
                      <td>10.00</td>
                      <td>18.10</td>
                    </tr>
                      )
                    })}
                    
                  </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Stock