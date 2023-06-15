import React, { useState } from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import useSelection from "antd/es/table/hooks/useSelection";
import { useEffect } from "react";
import { getMonthlyData, getYearlyData } from "../features/auth/authSlice";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "staus",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    staus: `London, Park Lane no. ${i}`,
  });
}
const Dashboard = () => {
  const dispatch = useDispatch();
  const monthlyDataState = useSelection((state) => state.auth.monthlyData);
  const yearlyDataState = useSelection((state) => state.auth.yearlyData);

  const [dataMonthly, setDataMonthly] = useState([]);
  const [dataMonthlySales, setDataMonthlySales] = useState([]);

  useEffect(() => {
    dispatch(getMonthlyData());
    dispatch(getYearlyData());
  }, []);

  useEffect(() => {
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let data = [];
    let monthlyOrderCount =[]
    for (let index = 0; index < monthlyDataState?.length; index++) {
      const element = monthlyDataState[index];
      data.push({
        type: monthNames[element?._id?.month],
        income: element?.amount,
      });
      monthlyOrderCount.push({
        type: monthNames[element?._id?.month],
        sales: element?.count,
      });
    }
    setDataMonthly(data)
    setDataMonthlySales(monthlyOrderCount)
  }, [monthlyDataState]);

  
  const config = {
    data:dataMonthly,
    xField: "type",
    yField: "income",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
   const config2 = {
     data: dataMonthlySales,
     xField: "type",
     yField: "sales",
     color: ({ type }) => {
       return "#ffd333";
     },
     label: {
       position: "middle",
       style: {
         fill: "#FFFFFF",
         opacity: 1,
       },
     },
     xAxis: {
       label: {
         autoHide: true,
         autoRotate: false,
       },
     },
     meta: {
       type: {
         alias: "Month",
       },
       sales: {
         alias: "sales",
       },
     },
   };
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex p-3 justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total income</p>
            <h4 className="mb-0 sub-title">RS.{yearlyDataState[0].amount}</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
           
            <p className="mb-0  desc">Income in last year from today </p>
          </div>
        </div>
        <div className="d-flex p-3 justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total Sales</p>
            <h4 className="mb-0 sub-title">Data{yearlyDataState[0].count}</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
       
            <p className="mb-0  desc">Sales in last year from today </p>
          </div>
        </div>
      </div>

      <div className="d-flex  justify-content-between gap-3">
        <div className="mt-4 flex-glow-1 w-50">
          <h3 className="mb-5 title">Income Statics</h3>
          <div>
            <Column {...config} />
          </div>
        </div>

        <div className="d-flex  justify-content-between gap-3">
          <div className="mt-4 flex-glow-1 w-50">
            <h3 className="mb-5 title">sales Statics</h3>
            <div>
              <Column {...config2} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Recent Orders</h3>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
