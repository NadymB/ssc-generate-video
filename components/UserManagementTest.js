"use client";
import React, { useEffect, useState, useContext, useRef, useMemo } from "react";
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
import { fetchDetailUserApi } from "@/app/api/User";
import { updateUserApi } from "@/app/api/User";
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

export default function UserManagementTest() {
  const [users, setUsers] = useState([]);
  const [createdUser, setCreatedUser] = useState({});
  const [groups, setGroups] = useState([]);
  const [teams, setTeams] = useState([]);
  const [detailUser, setDetailUser] = useState({});
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    meta: null,
  });
  const [modalVisit, setModalVisit] = useState(false);
  const [updateModalVisit, setUpdateModalVisit] = useState(false);
  const [copyCredentialsModalVisit, setCopyCredentialsModalVisit] =
    useState(false);

  const restFormRef = useRef();
  const updateRestFormRef = useRef();
  const copyCredentialsRestFormRef = useRef();
  const formRef = useRef();
  const [form] = Form.useForm();

  const onChangePagination = (page) => {
    setPagination((prevState) => ({ ...prevState, page }));
  };

  const handleShowDetailUserModal = async (userId) => {
    try {
      const response = await fetchDetailUserApi(userId);
      if (response?.status === 200) {
        setDetailUser(response?.data?.data);
        setUpdateModalVisit(true);
      }
    } catch (error) {
      console.error("An error occurred:", error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    console.log("user detail:", detailUser);
  }, [detailUser]);

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
    try {
      const response = await createNewUserApi(values);

      if (response?.status === 200) {
        toast.success("Tạo tài khoản thành công!");
        setCreatedUser(response?.data?.data);
        fetchUserList(1, pagination.pageSize);
        restFormRef.current?.resetFields();
        setModalVisit(false);
        setCopyCredentialsModalVisit(true);
      }
    } catch (error) {
      console.error("An error occurred:", error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  const handleCopyUserCredential = async (values) => {
    try {
      const { username, password } = values;

      const textToCopy = `username:${username}|password:${password}`;

      await navigator.clipboard.writeText(textToCopy);

      toast.success("Username và password đã được sao chép vào clipboard");
    } catch (err) {
      toast.error("Không thể sao chép thông tin. Vui lòng thử lại.");
      console.error("Error copying text:", err);
    }
  };
  useEffect(() => {
    console.log("createdUser:", createdUser);
  }, [createdUser]);

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
  // const linearGradientButton = css`
  //   &.${rootPrefixCls}-btn-primary:not([disabled]):not(
  //       .${rootPrefixCls}-btn-dangerous
  //     ) {
  //     border-width: 0;

  //     > span {
  //       position: relative;
  //     }

  //     &::before {
  //       content: "";
  //       background: linear-gradient(135deg, #6253e1, #04befe);
  //       position: absolute;
  //       inset: 0;
  //       opacity: 1;
  //       transition: all 0.3s;
  //       border-radius: inherit;
  //     }

  //     &:hover::before {
  //       opacity: 0;
  //     }
  //   }
  // `;

  const handleUpdateUser = async (values) => {
    try {
      console.log("values:", values);
      let toSubmit = {
        id: detailUser?.id,
        ...values,
        group_id: values?.group_id?.value
          ? values?.group_id?.value
          : values?.group_id,
      };

      const response = await updateUserApi(toSubmit);

      if (response?.status === 200) {
        toast.success("Cập nhật user thành công!");
        fetchUserList(1, pagination.pageSize);
        updateRestFormRef.current?.resetFields();
        setUpdateModalVisit(false);
      }
    } catch (error) {
      console.error(
        "An error occurred when update team:",
        error?.response?.data?.message
      );
      toast.error(error?.response?.data?.message);
    }
  };

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

  const columns = useMemo(
    () => [
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
      {
        title: "Action",
        dataIndex: "id",
        key: "id",
        render: (_, { id }) => (
          <div className="d-flex justify-content-center w-100">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => {
                handleShowDetailUserModal(id);
              }}
            >
              Update
            </button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <>
      <div className="techwave_fn_community_page">
        <div className="fn__title_holder">
          <div className="container-fluid">
            <h1 className="title">Quản lý User</h1>
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
                Tạo mới user
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
        title="Tạo mới user"
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
            // rules={[
            //   {
            //     required: true,
            //   },
            // ]}
          />
        </ProForm.Group>
      </ModalForm>

      {/* update user modal form */}
      <ModalForm
        title="Cập nhật user"
        open={updateModalVisit}
        onFinish={handleUpdateUser}
        onOpenChange={setUpdateModalVisit}
        submitter={{
          searchConfig: {
            submitText: "Submit",
            resetText: "Close",
          },
        }}
        validateMessages={validateMessages}
        formRef={updateRestFormRef}
        modalProps={{
          destroyOnClose: true,
          onCancel: () => console.log("run"),
        }}
      >
        <ProForm.Group>
          {/* <ProFormText
            width="md"
            name={"name_" + detailUser?.id}
            label="Tên của user"
            tooltip="Nhập tên của user"
            placeholder="Nhập tên của user"
            value={detailUser["name"]}
            // rules={[
            //   {
            //     required: true,
            //   },
            // ]}
          /> */}
          <ProFormText
            width="md"
            name="name"
            label="Tên của user"
            tooltip="Nhập tên của user"
            placeholder="Nhập tên của user"
            value={detailUser["name"]}
            disabled
          />
          <ProFormText
            width="md"
            name="email"
            label="email"
            tooltip="email cua user"
            // placeholder="Nhập tên của team"
            value={detailUser?.email}
            disabled
          />
        </ProForm.Group>
        <ProForm.Group>
          {/* manager */}
          <ProFormSelect
            options={groups?.map((group) => ({
              value: group.id,
              label: group.name,
            }))}
            width="md"
            placeholder={"..."}
            name="group_id"
            label="Chọn group"
            initialValue={{
              // value: detailUser["group"]["id"],
              value: detailUser["group_id"],
            }}
            // initialValue={detailTeam?.manager?.id} 
          />
          {/* teams */}
          <ProFormSelect
            options={teams?.map((team) => ({
              value: team.id,
              label: team.name,
            }))}
            width="md"
            placeholder="..."
            name="team_ids"
            label="Chọn team"
            fieldProps={{
              mode: "multiple",
            }}
            initialValue={detailUser?.teams?.map((team) => team.id)} // Trích xuất toàn bộ team.id
          />
        </ProForm.Group>
      </ModalForm>

      {/* copy-credentials modal form */}
      <ModalForm
        title="Sao chép thông tin đăng nhập"
        open={copyCredentialsModalVisit}
        onFinish={handleCopyUserCredential}
        onOpenChange={setCopyCredentialsModalVisit}
        submitter={{
          searchConfig: {
            submitText: "Sao chép",
            resetText: "Đóng",
          },
        }}
        validateMessages={validateMessages}
        formRef={copyCredentialsRestFormRef}
        modalProps={{
          destroyOnClose: true,
          onCancel: () => setCreatedUser({}),
        }}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="username"
            label="username"
            initialValue={createdUser?.username}
            disabled
          />
          <ProFormText
            width="md"
            name="password"
            label="password"
            initialValue={createdUser?.password}
            disabled
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}
