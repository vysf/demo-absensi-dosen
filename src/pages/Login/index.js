import React from "react";
// import "./_login.scss";
import { Button, Input, Gap } from "../../components";
import { logoSecodary } from "../../assets";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <div className="container-helper">
      <div className="login-container">
        <Helmet>
          <title>Login Kehadiran</title>
          <meta name="description" content="login kehadiran dosen" />
        </Helmet>
        <img className="login-logo" src={logoSecodary} alt="logo jurusan" />
        <Gap height="36px" />
        <form>
          <Input label="NIDN" htmlfor="NIDN" placeholder="" id="NIDN" />
          <Gap height="24px" />
          <Input
            label="Password"
            htmlfor="password"
            placeholder=""
            id="password"
          />
          <Gap height="28px" />
          <div className="confirm-container">
            <span
              className="forgot-pass"
              data-tooltip="Silahkan hubungi admin 
            Jurusan Fisika."
            >
              Lupa password?
            </span>
            <Button text="Masuk" action="primary" size="large" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// const data = useMemo(
//   () => [
//     {
//       col1: "1",
//       col2: "Nama Lengkap Dosen",
//       col3: "1980xxxxxxxxxxxxxx",
//       col4: "2009xxxxxx",
//       col5: (
//         <TagStatus statusText="Sedang tidak diruangan" statusMode="danger" />
//       ),
//     },
//     {
//       col1: "2",
//       col2: "Nama Lengkap Dosen",
//       col3: "1980xxxxxxxxxxxxxx",
//       col4: "2009xxxxxx",
//       col5: <TagStatus statusText="Ada diruangan" statusMode="succes" />,
//     },
//     {
//       col1: "3",
//       col2: "Nama Lengkap Dosen",
//       col3: "1980xxxxxxxxxxxxxx",
//       col4: "2009xxxxxx",
//       col5: <TagStatus statusText="Sedang rapat" statusMode="warning" />,
//     },
//   ],
//   []
// );

// const columns = useMemo(
//   () => [
//     {
//       Header: "No",
//       accessor: "col1", // accessor is the "key" in the data
//     },
//     {
//       Header: "Nama",
//       accessor: "col2",
//     },
//     {
//       Header: "NIP",
//       accessor: "col3",
//     },
//     {
//       Header: "NIDN",
//       accessor: "col4",
//     },
//     {
//       Header: "Status",
//       accessor: "col5",
//     },
//   ],
//   []
// );

//
// <Button action="primary" size="small" text="Simpan data" />
// <Button action="primary" size="large" text="Ubah foto" />
// <Button action="primary" size="extra-large" text="Mulai" />
// <Button action="primary" text="Mulai" />

// <Button action="secondry" size="small" text="Keluar" />
// <Button action="secondry" size="large" text="Mulai" />
// <Button action="secondry" size="extra-large" text="Mulai" />
// <Button action="secondry" text="Mulai" />

// <Button action="primary" size="small" text="Keluar" disabled="disabled" />
// <Button action="primary" size="large" text="Mulai" disabled="disabled" />
// <Button
//   action="primary"
//   size="extra-large"
//   text="Mulai"
//   disabled="disabled"
// />

// <Input label="ini input normal" htmlfor="input" id="input" />
// <Input
//   label="ini input error"
//   errorInfo={{ error: true, message: "ini pesan error" }}
//   htmlfor="input2"
//   id="input2"
// />

// <Select
//   label="label nih bos"
//   htmlfor="selectdong"
//   optionLabel="pilihlah disitok"
//   optionItems={["pileh 1", "pileh 2"]}
//   id="selectdong"
// />

// <TagStatus />

// <Table />
// <Table data={data} columns={columns} />

// <Avatar />
//
