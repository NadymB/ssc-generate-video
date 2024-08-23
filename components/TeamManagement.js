"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Row,
  Col,
  Space,
  Table,
  Tag,
  Pagination,
  Button,
  ConfigProvider,
  Modal,
} from "antd";
import {
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProFromMulti,
} from "@ant-design/pro-components";
import { fetchAdminListUser } from "../app/api/Auth";
import { fetchListTeamApi, updateTeamApi } from "@/app/api/Team";
import { fetchListUserApi } from "@/app/api/User";
import { fetchDetailTeamApi } from "@/app/api/Team";
import { createTeamApi } from "@/app/api/Team";
import { deleteTeamApi } from "@/app/api/Team";
import { Span } from "next/dist/trace";
import { UserAddOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function TeamManagement() {
  const [detailTeam, setDetailTeam] = useState({});
  const [managers, setManagers] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const [teams, setTeams] = useState([]);
  const [deleteTeamId, setDeleteTeamId] = useState("");
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    meta: null,
  });
  const [modalVisit, setModalVisit] = useState(false);
  const [updateModalVisit, setUpdateModalVisit] = useState(false);
  const restFormRef = useRef();
  const updateRestFormRef = useRef();
  const formRef = useRef();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDeleteTeam = async () => {
    console.log("deleteTeamId:", deleteTeamId);
    try {
      const response = await deleteTeamApi(deleteTeamId);

      if (response?.status === 200) {
        toast.success("Xóa team thành công!");
      }
    } catch (error) {
      console.error(
        "An error occurred when update team:",
        error?.response?.data?.message
      );
      toast.error(error?.response?.data?.message);
    }
    setOpenDeleteModal(false);
    setDeleteTeamId("");
  };

  const handleCancelDeleteModal = () => {
    setOpenDeleteModal(false);
    setDeleteTeamId("");
  };

  const handleShowDeleteTeamModal = (id) => {
    setDeleteTeamId(id);
    // console.log("xác nhận xóa team:", id);
    setOpenDeleteModal(true);
  };

  // test
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Manager",
      dataIndex: "manager",
      key: "manager",
      render: (_, { manager }) => manager?.name,
    },
    {
      title: "Supervisor",
      dataIndex: "supervisor",
      key: "supervisor",
      render: (_, { supervisor }) => supervisor?.name,
    },
    // {
    //   title: "Action",
    //   dataIndex: "id",
    //   key: "id",
    //   render: (_, { id }) => (
    //     <div className="d-flex justify-content-center w-100">
    //       <button
    //         type="button"
    //         class="btn btn-outline-primary"
    //         onClick={() => {
    //           handleShowDetailTeamModal(id);
    //         }}
    //       >
    //         Update
    //       </button>

    //       <button
    //         type="button"
    //         class="btn btn-outline-danger ms-2"
    //         onClick={() => handleShowDeleteTeamModal(id)}
    //       >
    //         Delete
    //       </button>
    //     </div>
    //   ),
    // },
  ];
  // test

  const onChangePagination = (page) => {
    setPagination((prevState) => ({ ...prevState, page }));
  };

  const handleShowDetailTeamModal = async (teamId) => {
    try {
      const response = await fetchDetailTeamApi(teamId);

      if (response?.status === 200) {
        setDetailTeam(response?.data?.data);
        setUpdateModalVisit(true);
      }
    } catch (error) {
      console.error("An error occurred:", error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    console.log("detailTeam:", detailTeam);
  }, [detailTeam]);

  const handleUpdateTeam = async (values) => {
    try {
      //
      let name_id = "name_" + detailTeam?.id;
      let toSubmit = {
        id: detailTeam?.id,
        name: values[name_id],
        ...values,
      };

      const response = await updateTeamApi(toSubmit);

      if (response?.status === 200) {
        toast.success("Cập nhật team thành công!");
        fetchTeamList(1, pagination.pageSize);
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

  const handleCreateTeam = async (values) => {
    // create a new team
    try {
      const response = await createTeamApi(values);

      if (response?.status === 200) {
        toast.success("Create a new team successfully!");
        fetchTeamList(1, pagination.pageSize);
        restFormRef.current?.resetFields();
        setModalVisit(false);
      }
    } catch (error) {
      console.error("An error occurred:", error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchManagerList = async (group_name) => {
    try {
      const response = await fetchListUserApi({ group_name });
      // setUsers(response?.data?.data?.items);
      setManagers(response?.data?.data?.items);
    } catch (error) {
      console.error("fetch manager list failed:", error);
    }
  };

  const fetchSupervisorList = async (group_name) => {
    try {
      const response = await fetchListUserApi({ group_name });
      // setUsers(response?.data?.data?.items);
      setSupervisors(response?.data?.data?.items);
    } catch (error) {
      console.error("fetch supervisor list failed:", error);
    }
  };

  const fetchTeamList = async (page, limit) => {
    try {
      const response = await fetchListTeamApi({ page, limit });
      let meta = response?.data?.data?.meta;
      setPagination((prevState) => ({ ...prevState, meta }));
      setTeams(response?.data?.data?.items);
    } catch (error) {
      console.error("fetch user list failed:", error);
    }
  };

  // first call
  useEffect(() => {
    fetchTeamList(pagination.page, pagination.pageSize);
  }, [pagination.page]);

  useEffect(() => {
    fetchManagerList("MANAGER");
  }, []);

  useEffect(() => {
    fetchSupervisorList("SUPERVISOR");
  }, []);

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

  useEffect(() => {
    console.log("detailTeam:", detailTeam);
  }, [detailTeam]);

  return (
    <>
      <div className="techwave_fn_community_page">
        <div className="fn__title_holder">
          <div className="container-fluid">
            <h1 className="title">Team Management</h1>
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
                Create a new team
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={teams}
              pagination={false}
              className="mt-2"
            />
            ;
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

      {/* new team modal form */}
      <ModalForm
        title="Tạo mới team"
        open={modalVisit}
        onFinish={handleCreateTeam}
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
            name="name"
            label="Tên của Team"
            tooltip="Nhập tên của team"
            placeholder="Nhập tên của team"
            rules={[
              {
                required: true,
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          {/* group */}
          <ProFormSelect
            options={managers?.map((user) => ({
              value: user.id,
              label: user.name,
            }))}
            width="md"
            placeholder={"..."}
            name="manager_id"
            label="Chọn Manager"
            rules={[
              {
                required: true,
              },
            ]}
          />
          {/* team */}
          <ProFormSelect
            options={supervisors?.map((user) => ({
              value: user.id,
              label: user.name,
            }))}
            width="md"
            placeholder={"..."}
            name="supervisor_id"
            label="Chọn Supervisor"
            rules={[
              {
                required: true,
              },
            ]}
          />
        </ProForm.Group>
      </ModalForm>

      {/* update team modal form */}
      <ModalForm
        title="Cập nhật team"
        open={updateModalVisit}
        onFinish={handleUpdateTeam}
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
          <ProFormText
            width="md"
            name={"name_" + detailTeam?.id}
            label="Tên của team"
            // tooltip="Nhập tên của team"
            // placeholder="Nhập tên của team"
            value={detailTeam["name"]}
            rules={[
              {
                required: true,
              },
            ]}
          />
          <ProFormText
            width="md"
            name="created_by"
            label="Được tạo bởi"
            // tooltip="Nhập tên của team"
            // placeholder="Nhập tên của team"
            value={detailTeam?.created_by?.name}
            disabled
          />
        </ProForm.Group>
        <ProForm.Group>
          {/* manager */}
          <ProFormSelect
            options={managers?.map((user) => ({
              value: user.id,
              label: user.name,
            }))}
            width="md"
            placeholder={"..."}
            name="manager_id"
            label="Chọn Manager"
            // initialValue={{
            //   value: detailTeam["manager"]["id"],
            //   label: detailTeam["manager"]["name"],
            // }}
            initialValue={detailTeam?.manager?.id}
            rules={[
              {
                required: true,
              },
            ]}
          />
          {/* supervisor */}
          <ProFormSelect
            options={supervisors?.map((user) => ({
              value: user.id,
              label: user.name,
            }))}
            width="md"
            placeholder={"..."}
            name="supervisor_id"
            label="Chọn Supervisor"
            initialValue={detailTeam?.supervisor?.id}
            rules={[
              {
                required: true,
              },
            ]}
          />
        </ProForm.Group>
      </ModalForm>

      {/* delete confirm modal */}
      <Modal
        title={`Bạn có chắc chắn muốn xóa team '${deleteTeamId}'?`}
        open={openDeleteModal}
        onOk={handleDeleteTeam}
        onCancel={handleCancelDeleteModal}
        okText="Xác nhận"
        cancelText="Hủy"
      ></Modal>
    </>
  );
}
