import React, { useMemo } from "react";
import { Table, TagStatus, Search } from "../../../components";

const Dashboard = () => {
  const data = useMemo(
    () => [
      {
        col1: "1",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: (
          <TagStatus statusText="Sedang tidak diruangan" statusMode="danger" />
        ),
        // col6: "edit | delete",
      },
      {
        col1: "2",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Ada diruangan" statusMode="succes" />,
        // col6: "edit | delete",
      },
      {
        col1: "3",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Ada diruangan" statusMode="succes" />,
        // col6: "edit | delete",
      },
      {
        col1: "4",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Ada diruangan" statusMode="succes" />,
        // col6: "edit | delete",
      },
      {
        col1: "5",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Sedang rapat" statusMode="warning" />,
        // col6: "edit | delete",
      },
      {
        col1: "6",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Sedang rapat" statusMode="warning" />,
        // col6: "edit | delete",
      },
      {
        col1: "7",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Sedang rapat" statusMode="warning" />,
        // col6: "edit | delete",
      },
      {
        col1: "8",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: (
          <TagStatus statusText="Sedang tidak diruangan" statusMode="danger" />
        ),
        // col6: "edit | delete",
      },
      {
        col1: "9",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: (
          <TagStatus statusText="Sedang tidak diruangan" statusMode="danger" />
        ),
        // col6: "edit | delete",
      },
      {
        col1: "10",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: (
          <TagStatus statusText="Sedang tidak diruangan" statusMode="danger" />
        ),
        // col6: "edit | delete",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "No",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Nama",
        accessor: "col2",
      },
      {
        Header: "NIP",
        accessor: "col3",
      },
      {
        Header: "NIDN",
        accessor: "col4",
      },
      {
        Header: "Status",
        accessor: "col5",
      },
      // {
      //   Header: "",
      //   accessor: "col6",
      // },
    ],
    []
  );
  return (
    <div className="container_dashboard">
      <h2>Dasboard</h2>
      <div className="cari_tambah_info">
        <div className="test_input">
          <Search
            htmlfor={"cari"}
            placeholder={"Cari disini..."}
            errorInfo={{
              error: false,
              message: "",
            }}
            id="cari"
            type="search"
          />
        </div>
        <div className="tambah_dosen">
          <i className="bx bxs-plus-square"></i>
          <span className="tambah_dosen_caption">Tambah dosen</span>
        </div>
        <span className="info_jumlah_dosen">
          Jumlah <b>100</b> dosen
        </span>
      </div>
      <div className="container_table">
        <Table data={data} columns={columns} />
      </div>
    </div>
  );
};

export default Dashboard;
