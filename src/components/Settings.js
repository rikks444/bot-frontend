import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";

const Settings = () => {
  const [adminForm] = useForm();
  const [settings, setSettings] = useState();

  useEffect(() => {
    async function getSettings() {
      const res = await axios.get("http://localhost:8000/admin/settings");
      setSettings(res.data.settings[0]);
    }

    getSettings();
  }, []);

  useEffect(() => {
    adminForm.setFieldValue("apiKey", settings?.apiKey);
    adminForm.setFieldValue("frequency", settings?.frequency);
  }, [settings]);

  function onSubmitHandler() {
    const settings = adminForm.getFieldsValue();

    axios.post("http://localhost:8000/admin/settings", settings);
  }

  return (
    <Form
      form={adminForm}
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      <Form.Item label="Weather API Key" name="apiKey">
        <Input />
      </Form.Item>
      <Form.Item label="frequency" name="frequency">
        <Input />
      </Form.Item>
      <Button type="primary" onClick={onSubmitHandler}>
        Update
      </Button>
    </Form>
  );
};

export default Settings;
