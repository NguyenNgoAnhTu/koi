import { useEffect, useState } from "react";
import { Table } from "antd";

function ConstructionHistory() {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:8080/api/construction_history/get-design_profiles-by-constructor",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json(); // Convert response to JSON
      setDatas(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "designProfileId",
      key: "designProfileId",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Contruction status",
      dataIndex: "contructionStatus",
      key: "contructionStatus",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];
  return (
    <div>
      <Table dataSource={datas} columns={columns}></Table>
    </div>
  );
}

export default ConstructionHistory;
