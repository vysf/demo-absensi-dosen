import React, { useMemo } from "react";
import { Table, TagStatus } from "../../components";
import { Helmet } from "react-helmet";

// import "./_statusKehadiran.scss";

const StatusKehadiranDosen = () => {
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
      },
      {
        col1: "2",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Ada diruangan" statusMode="succes" />,
      },
      {
        col1: "3",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Ada diruangan" statusMode="succes" />,
      },
      {
        col1: "4",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Ada diruangan" statusMode="succes" />,
      },
      {
        col1: "5",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Sedang rapat" statusMode="warning" />,
      },
      {
        col1: "6",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Sedang rapat" statusMode="warning" />,
      },
      {
        col1: "7",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: <TagStatus statusText="Sedang rapat" statusMode="warning" />,
      },
      {
        col1: "8",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: (
          <TagStatus statusText="Sedang tidak diruangan" statusMode="danger" />
        ),
      },
      {
        col1: "9",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: (
          <TagStatus statusText="Sedang tidak diruangan" statusMode="danger" />
        ),
      },
      {
        col1: "10",
        col2: "Nama Lengkap Dosen",
        col3: "1980xxxxxxxxxxxxxx",
        col4: "2009xxxxxx",
        col5: (
          <TagStatus statusText="Sedang tidak diruangan" statusMode="danger" />
        ),
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
    ],
    []
  );
  return (
    <div className="kehadiran-container">
      <Helmet>
        <title>Status Kehadiran</title>
        <meta name="description" content="status kehadiran dosen" />
      </Helmet>
      <div className="tabel_kehadiran">
        <Table data={data} columns={columns} />
      </div>

      <div className="link-info-banner">
        <div className="links-info">
          <label className="label-link">Website Jurusan Fisika</label>
          <p className="link">www.xxxxxxxxxxx.com</p>
        </div>
        <div className="links-info">
          <label className="label-link">Website Jurusan Fisika</label>
          <p className="link">www.xxxxxxxxxxx.com</p>
        </div>
        <div className="links-info">
          <label className="label-link">Website Jurusan Fisika</label>
          <p className="link">www.xxxxxxxxxxx.com</p>
        </div>
        <div className="links-info">
          <label className="label-link">Website Jurusan Fisika</label>
          <p className="link">www.xxxxxxxxxxx.com</p>
        </div>
        <div className="links-info">
          <label className="label-link">Website Jurusan Fisika</label>
          <p className="link">www.xxxxxxxxxxx.com</p>
        </div>
        <div className="links-info">
          <label className="label-link">Website Jurusan Fisika</label>
          <p className="link">www.xxxxxxxxxxx.com</p>
        </div>
      </div>
    </div>
  );
};

export default StatusKehadiranDosen;
