"use client";
import React, { useEffect, useState } from "react";
import { Row, Col, Space, Table, Tag, Pagination } from "antd";
import { fetchAdminListUser } from "../app/api/Auth";
import { fetchGroupListApi } from "@/app/api/Group";
import { Span } from "next/dist/trace";

const columns = [
  // {
  //   title: "Group ID",
  //   dataIndex: "id",
  //   key: "id",
  //   render: (text) => <a>{text}</a>,
  // },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <span>{text}</span>,
  },
];

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Tags",
//     key: "tags",
//     dataIndex: "tags",
//     render: (_, { role }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "green";
//           if (tag === "admin") {
//             color = "volcano";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (_, record) => (
//       <Space size="middle">
//         {/* <a>Invite {record.name}</a> */}
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

export default function GroupManagement() {
  const [groups, setGroups] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    meta: null,
  });

  const onChangePagination = (page) => {
    setPagination((prevState) => ({ ...prevState, page }));
  };

  const fetchGroupList = async (page, limit) => {
    try {
      const response = await fetchGroupListApi({ page, limit });
      let meta = response?.data?.data?.meta;
      setPagination((prevState) => ({ ...prevState, meta }));
      setGroups(response?.data?.data);
    } catch (error) {
      console.error("fetch group list failed:", error);
    }
  };

  useEffect(() => {
    console.log("pagination:", pagination);
  }, [pagination]);

  // first call
  useEffect(() => {
    fetchGroupList(pagination.page, pagination.pageSize);
  }, [pagination.page]);

  return (
    <div className="techwave_fn_community_page">
      <div className="fn__title_holder">
        <div className="container-fluid">
          <h1 className="title">Quản lý Group</h1>
        </div>
      </div>
      <div className="techwave_fn_feed">
        <div className="container-fluid">
          <Table columns={columns} dataSource={groups} pagination={false} />;
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
