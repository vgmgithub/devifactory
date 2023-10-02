import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
 

const ContactTable = ({ data,toggleContact }) => {

    
function formatTimeAgo(timestamp) {
    const now = new Date();
    const timeDiff = now - new Date(timestamp);
  
    // Define time intervals in milliseconds
    const intervals = {
      year: 31536000000,
      month: 2592000000,
      day: 86400000,
      hour: 3600000,
      minute: 60000,
      second: 1000,
    };
  
    for (const [interval, duration] of Object.entries(intervals)) {
      const agoValue = Math.floor(timeDiff / duration);
  
      if (agoValue >= 1) {
        return `${agoValue} ${interval}${agoValue === 1 ? '' : 's'} ago`;
      }
    }
  
    return 'Just now';
  }
    
  const columns = useMemo(
    () => [
        {
            Header: 'ID',
            accessor: 'serialNumber', // Use an accessor that does not exist in your data
              Cell: ({ row }) => row.index + 1,
        },
        {
            Header: 'Name',
            accessor: 'name', // Replace with the actual property name from your data
        },
        {
            Header: 'Mobile',
            accessor: 'mobile', // Replace with the actual property name from your data
        },
        {
            Header: 'Email',
            accessor: 'email', // Replace with the actual property name from your data
        },
        {
            Header: 'Interest',
            accessor: 'interest', // Replace with the actual property name from your data
        },
        {
            Header: 'Query',
            accessor: 'message', // Replace with the actual property name from your data
          },
          {
            Header: 'Created Date',
            accessor: (row) => `${formatTimeAgo(row.timestamp)}`,
          },
          {
            Header: 'Status',
            accessor: 'active',
            Cell: ({ row }) => (
                <button
                onClick={() => toggleContact(row.original._id)}
                style={{
                  backgroundColor: row.original.noted ? '#2972dc' : 'rgb(106 154 223)',
                  fontSize: "12px",
                  color: "white",
                  border: "none",
                  borderRadius: "13px",
                  padding: "5px 15px",
                  
                }}
              >
                {row.original.noted ? 'Noted' : 'Pending'}
              </button>
            ),
          },
        ],
        [toggleContact]
  );

  // Use the useTable hook to create the table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data, // Pass the data retrieved from the API
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter, // Enable global filtering
    useSortBy, // Enable sorting
    usePagination // Enable pagination
    );

    const { globalFilter, pageIndex } = state;

  return (
    <div>
         
        <input
          type="text"
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button  className='btn btn-primary' onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button> &nbsp;&nbsp;
          <button className='btn btn-primary' onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>&nbsp;&nbsp;
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {page.length}
            </strong>{' '}
          </span>
        </div>
      </div>
  );
};

export default ContactTable;
