import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { fetchAdminListUser } from '../app/api/Auth';
import AddIcon from '@mui/icons-material/Add';
import { Button, FormControl } from '@material-ui/core';
import { MenuItem } from 'material-ui';
import { Select } from '@mui/material';


function UserDataTable(props) {
    const [users, setUsers] = useState([]);
    const [groups, setGroups] = useState([]);
    const [groupFilter, setGroupFilter] = useState('');


    useEffect(() => {
        const fetchUserList = async () => {
            try {
                const response = await fetchAdminListUser();
                const userList = response?.data?.data?.items;
                console.log("User list: ");
                console.log(userList);
                setUsers(userList);

                const groupList = [...new Set(userList?.map((user) => user?.group))];
                setGroups(groupList);
                console.log("Groups: ");
                console.log(groupList);
            } catch (error) {
                console.error("fetch user list failed:", error);
            }
        }

        fetchUserList();
    }, []);


    const handleAddNewUser = async () => {
        // Add new user logic
    }



    const dataTablesColumns = [
        { name: '#', selector: (row, index) => index + 1, sortable: false, width: '50px' },
        { name: 'Name', selector: (row) => row?.name, sortable: true },
        { name: 'Username', selector: (row) => row?.username, sortable: true },
        { name: 'Email', selector: (row) => row?.email, sortable: true },
        { name: 'Group', selector: (row) => row?.group, sortable: true },
        { name: 'Team', selector: (row) => row?.teams?.map((team) => team?.name).join(', '), sortable: false },
    ];
    const customStyles = {
        header: {
            style: {
                backgroundColor: '#1e1e2d',
                color: '#ffffff',
                fontSize: '2rem',
                fontWeight: 'bold',
                padding: '1rem 0 1rem 3rem'
            },
        },
        pagination: {
            style: {
                backgroundColor: '#1e1e2d',
                color: '#ffffff',
                fontSize: '1rem',
            },
        },
        paginationSelect: {
            style: {
                backgroundColor: '#2d2d44',
                color: '#ffffff',
                border: '1px solid #3a3a57',
                borderRadius: '5px',
                padding: '5px',
                fontSize: '1rem',
            },
        },
        rows: {
            style: {
                backgroundColor: '#1e1e2d',
                color: '#ffffff',
            },
        },
        headCells: {
            style: {
                backgroundColor: '#3a3a57',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '1rem',
            },
        },
        cells: {
            style: {
                color: '#ffffff',
                fontSize: '1rem',
            },
        },
    };
    return (
        <div className='w-full h-screen d-flex flex-column justify-center items-center'
            style={{ padding: '16px', backgroundColor: '#1e1e2d' }}
        >
            <div className='w-full d-flex justify-start items-center p-4'>
                <h1 className='text-white text-start' style={{ fontSize: '2rem' }}>User</h1>
            </div>

            <div className='w-full d-flex justify-between items-center p-2'>
                {/* Filter Input */}
                <div>
                    <label htmlFor='group-filter' className='text-white mb-2'>Group:</label>
                    <select id='group-filter' name='group-filter'
                        value={groupFilter}
                        onChange={(e) => setGroupFilter(e.target.value)}
                        className='w-[100px] p-2.5 block 
                        border border-gray-300 bg-gray-50
                        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        style={{
                            padding: '8px 16px',
                            marginBottom: '16px',
                            borderRadius: '8px',
                            color: '#ffffff',
                            fontSize: '1rem'
                        }}
                    >
                        <option value="all">All</option>
                        {groups && groups?.length > 0 && groups?.map((group, index) => (
                            <option key={`group-${index}`} value={group}>{group}</option>
                        ))}
                    </select>
                </div>


                {/* Add New User Button */}
                <Button
                    onClick={() => handleAddNewUser}
                    style={{
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '4px',
                        backgroundColor: '#007bff',
                        color: '#ffffff',
                        cursor: 'pointer',
                    }}
                >
                    Add New User
                    <AddIcon style={{ marginLeft: '4px', width: '40px' }} />
                </Button>
            </div>
            <DataTable
                data={users}
                pagination
                responsive
                highlightOnHover
                columns={dataTablesColumns}
                theme='dark'
                persistTableHead
                fixedHeader
                noDataComponent="No user data found"
                paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                customStyles={customStyles}
            />
        </div>
    );
}

export default UserDataTable;