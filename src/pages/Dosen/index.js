import React from "react";
import { Avatar, Button, Gap, Input, Select } from "../../components";
// import "./_dosen.scss";
import { Helmet } from "react-helmet";

const Dosen = () => {
  return (
    <div className="dosen-page">
      <Helmet>
        <title>Dasboard Dosen</title>
      </Helmet>
      <div className="dosen-container">
        <div className="avatar-container">
          <Avatar />
          <Gap height={"19px"} />
          <Button text={"Ganti foto"} action={"primary"} size={"small"} />
        </div>
        <Gap height={"56px"} />
        <div className="form-container">
          <form>
            <div className="input-container">
              <Input
                label={"Nama Lengkap"}
                htmlfor={"nama"}
                placeholder={"Dosen A"}
                errorInfo={{
                  error: false,
                  message: "",
                }}
                id="nama"
              />
              <Input
                label={"NIP"}
                htmlfor={"NIP"}
                placeholder={"1980xxxxxxxxxxxxxx"}
                errorInfo={{
                  error: false,
                  message: "",
                }}
                id="NIP"
              />
              <Input
                label={"NIDN"}
                htmlfor={"NIDN"}
                placeholder={"2009xxxxxx"}
                errorInfo={{
                  error: false,
                  message: "",
                }}
                id="NIDN"
              />
              <Input
                label={"Password"}
                htmlfor={"pass"}
                placeholder={"************"}
                errorInfo={{
                  error: false,
                  message: "",
                }}
                id="pass"
                type="password"
              />
              <Select
                label={"Status kehadiran"}
                htmlfor={"status"}
                optionLabel={"Sedang Rapat"}
                optionItems={[
                  "Sedang rapat",
                  "Sedang tidak diruangan",
                  "Ada diruangan",
                ]}
                errorInfo={{
                  error: false,
                  message: "",
                }}
                id="status"
              />
            </div>
            <Gap height={"34px"} />
            <div className="button-container">
              <Button text={"Simpan"} action={"primary"} size={"small"} />
              <Gap width={"20px"} />
              <Button text={"Keluar"} action={"secondry"} size={"small"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dosen;
