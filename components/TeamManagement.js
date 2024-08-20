"use client";
import React, { useEffect, useState } from "react";
import { Row, Col, Space, Table, Tag, Pagination } from "antd";
import { fetchAdminListUser } from "../app/api/Auth";
impoire;

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
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (_, { role }) => (
      <>
        <Tag color={"volcano"} key={role}>
          {/* {role.toUpperCase()} */}
          {/* {role} */}
          ADMIN
        </Tag>
      </>
    ),
  },
  {
    title: "Group",
    dataIndex: "group",
    key: "group",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Team",
    dataIndex: "team",
    key: "team",
    render: (text) => <span>{text}</span>,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    username: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    username: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    username: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "John Brown",
    username: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "5",
    name: "Jim Green",
    username: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "6",
    name: "Joe Black",
    username: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    name: "John Brown",
    username: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "8",
    name: "Jim Green",
    username: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "9",
    name: "Joe Black",
    username: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default function TeamManagement() {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 1,
    meta: null,
  });

  const onChangePagination = (page) => {
    setPagination((prevState) => ({ ...prevState, page }));
  };

  const onChangePaginationSize = (newPageSize) => {
    console.log("newPageSize:", newPageSize);
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

    // try{
    //   const response = await fetch
    // }
  };

  useEffect(() => {
    console.log("pagination:", pagination);
  }, [pagination]);

  // first call
  useEffect(() => {
    fetchUserList(pagination.page, pagination.pageSize);
  }, [pagination.page]);

  return (
    <div className="techwave_fn_community_page">
      <div className="fn__title_holder">
        <div className="container-fluid">
          <h1 className="title">Team Management</h1>
        </div>
      </div>
      <div className="techwave_fn_feed">
        <div className="container-fluid">
          <Table columns={columns} dataSource={users} pagination={false} />;
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
  );
}
