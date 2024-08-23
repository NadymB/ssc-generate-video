"use client";
import React, { useEffect, useState, useContext, useRef } from "react";
import {
  Row,
  Col,
  Space,
  Table,
  Tag,
  Pagination,
  Button,
  ConfigProvider,
} from "antd";
import { fetchAdminListUser } from "../app/api/Auth";
import { fetchGroupListApi } from "@/app/api/Group";
import { fetchListTeamApi } from "@/app/api/Team";
import { createNewUserApi } from "@/app/api/User";
import { UserAddOutlined } from "@ant-design/icons";
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

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Group",
    dataIndex: "group",
    key: "group",
    render: (_, { group }) => (
      <Tag
        color={
          group === "ADMIN"
            ? "geekblue"
            : group === "SUPERVISOR"
            ? "green"
            : "volcano"
        }
        key={group}
      >
        {group.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Teams",
    dataIndex: "teams",
    key: "teams",
    render: (teams) => (
      <span>{teams?.map((team) => team.name).join(", ")}</span>
    ),
  },
];

export default function UserManagementTest() {
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [teams, setTeams] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    meta: null,
  });
  const [modalVisit, setModalVisit] = useState(false);
  const restFormRef = useRef();
  const formRef = useRef();
  const [form] = Form.useForm();

  const onChangePagination = (page) => {
    setPagination((prevState) => ({ ...prevState, page }));
  };

  const fetchUserList = async (page, limit) => {
    try {
      const response = await fetchAdminListUser({ page, limit });
      let meta = response?.data?.data?.meta;
      setPagination((prevState) => ({ ...prevState, meta }));
      setUsers(response?.data?.data?.items);
    } catch (error) {
      console.error("fetch user list failed:", error);
    }
  };

  const fetchGroupList = async (page, limit) => {
    try {
      const response = await fetchGroupListApi({ page, limit });
      setGroups(response?.data?.data);
    } catch (error) {
      console.error("fetch group list failed:", error);
    }
  };

  const fetchTeamList = async (page, limit) => {
    try {
      const response = await fetchListTeamApi({ page, limit });
      setTeams(response?.data?.data?.items);
    } catch (error) {
      console.error("fetch team list failed:", error);
    }
  };

  const handleCreateUser = async (values) => {
    // create a new user
    try {
      // console.log("testing...");
      const response = await createNewUserApi(values);
      // console.log("response:", response);
      if (response?.status === 200) {
        toast.success("Create a new user successfully!");
        fetchUserList(1, pagination.pageSize);
        restFormRef.current?.resetFields();
        setModalVisit(false);
      }
    } catch (error) {
      console.error("An error occurred:", error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  // first call
  useEffect(() => {
    fetchUserList(pagination.page, pagination.pageSize);
  }, [pagination.page]);

  useEffect(() => {
    fetchGroupList(1, 100);
    fetchTeamList(1, 100);
  }, []);

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(
        .${rootPrefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (
    <>
      <div className="techwave_fn_community_page">
        <div className="fn__title_holder">
          <div className="container-fluid">
            <h1 className="title">User Management</h1>
          </div>
        </div>
        <div className="techwave_fn_feed">
          <div className="container-fluid">
            <div className="w-100 d-flex justify-content-end">
              <Button
                type="primary"
                size="large"
                icon={<UserAddOutlined />}
                className="d-flex align-items-center bg-success"
                onClick={() => {
                  setModalVisit(true);
                }}
              >
                Create a new user
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={users}
              pagination={false}
              className="mt-2"
            />

            <Row>
              <Col xs={24}>
                <div className="user-card-pagination text-end mt-5">
                  <Pagination
                    align="end"
                    total={pagination?.meta?.total}
                    onChange={onChangePagination}
                    // onShowSizeChange={onChangePaginationSize}
                    // showSizeChanger
                    // onShowSizeChange={onShowSizeChange}
                    // defaultCurrent={1}
                    current={pagination.page}
                    // total={paginationMeta?.total}
                    pageSize={pagination.pageSize}
                  />
                  {/* <Pagination align="end" defaultCurrent={1} total={50} /> */}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* register modal form */}
      <ModalForm
        title="Create a new user"
        open={modalVisit}
        // form={form}
        // onFinish={async () => {
        //   // console.log("submitted");
        //   // message.success("提交成功");
        //   return true;
        // }}
        onFinish={handleCreateUser}
        onOpenChange={setModalVisit}
        submitter={{
          searchConfig: {
            submitText: "Submit",
            resetText: "Close",
          },
        }}
        validateMessages={validateMessages}
        formRef={restFormRef}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="username"
            label="Username"
            tooltip="Enter a username"
            placeholder="Enter username"
            rules={[
              {
                required: true,
              },
            ]}
          />
          <ProFormText
            type="email"
            width="md"
            name="email"
            label="Email"
            tooltip="Enter a email"
            placeholder="Enter a email"
            rules={[
              {
                required: true,
              },
              {
                type: "email",
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="sm"
            name="name"
            label="Name"
            tooltip="Enter a name"
            placeholder="Enter a name"
            rules={[
              {
                required: true,
              },
            ]}
          />
          {/* group */}
          <ProFormSelect
            options={groups.map((group) => ({
              value: group.id,
              label: group.name,
            }))}
            width="sm"
            placeholder={"..."}
            name="group_id"
            label="Choose a group"
            rules={[
              {
                required: true,
              },
            ]}
          />
          {/* team */}
          <ProFormSelect
            width="sm"
            placeholder={"..."}
            options={teams.map((team) => ({
              value: team.id,
              label: team.name,
            }))}
            fieldProps={{
              mode: "multiple",
            }}
            name="team_ids"
            label="Choose teams"
            rules={[
              {
                required: true,
              },
            ]}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}
