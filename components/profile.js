"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import {
  Row,
  Col,
  Space,
  Table,
  Pagination,
  Button,
  ConfigProvider,
  Tag,
  Flex,
} from "antd";
import { changePasswordApi } from "@/app/api/Auth";
import { css } from "@emotion/css";
import {
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProFromMulti,
} from "@ant-design/pro-components";
import { Form } from "antd";
// import { toast } from "react-toastify";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const { user } = useAuth();

  const [modalVisit, setModalVisit] = useState(false);
  const restFormRef = useRef();
  const formRef = useRef();
  const [form] = Form.useForm();

  const handleChangePassword = async (values) => {
    // change password
    try {
      const response = await changePasswordApi(values);

      if (response?.status === 200) {
        toast.success("Change password successfully!");
        restFormRef.current?.resetFields();
        setModalVisit(false);
      }
    } catch (error) {
      console.error("An error occurred:", error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="techwave_fn_user_settings_page">
        {/* Page Title */}
        <div className="techwave_fn_pagetitle">
          <h2 className="title">Profile</h2>
        </div>
        {/* !Page Title */}
        <div className="container small">
          <div className="techwave_fn_user_settings">
            <form>
              <div className="user__settings">
                <div className="settings_right">
                  <div className="item">
                    <label className="input_label" htmlFor="name">
                      Name
                    </label>
                    <div className="input_item">
                      <input
                        className="input text-secondary fw-bold profile-input"
                        type="text"
                        id="name"
                        defaultValue={user?.name}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <label className="input_label" htmlFor="name">
                      Username
                    </label>
                    <div className="input_item" disabled>
                      <input
                        disabled
                        className="input text-secondary fw-bold profile-input"
                        type="text"
                        // id="name"
                        defaultValue={user?.username}
                      />
                    </div>
                  </div>

                  <div className="item">
                    <label className="input_label" htmlFor="email">
                      Email Address
                    </label>
                    <div className="input_item">
                      <input
                        disabled
                        className="input text-secondary fw-bold profile-input"
                        type="text"
                        id="email"
                        defaultValue={user?.email}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <label className="input_label" htmlFor="group">
                      Group
                    </label>
                    <div className="input_item border px-2 py-3 rounded">
                      <Tag
                        color={
                          user?.group === "ADMIN"
                            ? "#f50"
                            : user?.group === "MANAGER"
                            ? "#2db7f5"
                            : user?.group == "SUPERVISOR"
                            ? "#87d068"
                            : user?.group == "EMPLOYEE"
                            ? "#108ee9"
                            : "#108ee9"
                        }
                        key={user?.group}
                      >
                        {user?.group.toUpperCase()}
                      </Tag>
                    </div>
                  </div>
                  <div className="item">
                    <label className="input_label" htmlFor="teams">
                      Teams
                    </label>
                    <div className="input_item">
                      {/* <input
                        disabled
                        className="input text-secondary"
                        type="text"
                        id="email"
                        defaultValue={user?.team_ids
                          ?.map((team) => team.name)
                          .join(", ")}
                      /> */}
                      {/* <Tag>{user?.group.toUpperCase()}</Tag> */}
                      <div className="input_item border px-2 py-3 rounded">
                        <Flex gap="4px 0" wrap>
                          {user?.teams?.map((team) => (
                            <Tag color="geekblue">{team.name}</Tag>
                          ))}
                          {/* {[{ name: "team_1" }, { name: "team_2" }].map(
                            (team) => (
                              <Tag color="geekblue">{team.name}</Tag>
                            )
                          )} */}
                        </Flex>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <label className="input_label" htmlFor="password">
                      Password
                    </label>
                    <Link
                      href={"#"}
                      className="fs-7"
                      onClick={() => {
                        setModalVisit(true);
                      }}
                    >
                      Change password
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* change-password modal form */}
      <ModalForm
        title="Change your password"
        open={modalVisit}
        onFinish={handleChangePassword}
        onOpenChange={setModalVisit}
        submitter={{
          searchConfig: {
            submitText: "Submit",
            resetText: "Close",
          },
        }}
        // validateMessages={validateMessages}
        formRef={restFormRef}
      >
        <ProForm.Group>
          <ProFormText.Password
            width="md"
            name="old_password"
            label="Old Password"
            tooltip="Enter old password"
            placeholder="Enter old password"
            rules={[
              {
                required: true,
                message: "Your old password is required!",
              },
            ]}
          />
          <ProFormText.Password
            width="md"
            name="new_password"
            label="New Password"
            tooltip="Enter new password"
            placeholder="Enter new password"
            rules={[
              {
                required: true,
                message: "Your new password is required!",
              },
            ]}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}
