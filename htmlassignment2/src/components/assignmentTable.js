import React from 'react'
import { useMemo } from 'react'
import { useTable } from 'react-table'
import { assignmentColumn } from './assignmentColumns'
import COMP1850_DATA from './COMP1850_DATA.json'

function AssignmentTable() {

    const columns = useMemo(() => assignmentColumn, [])
    const data = useMemo(() => COMP1850_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableBodyProps,
        getTableProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance



    return (
        <div>
            <h1>COMP 1850 Assignments</h1>
            <table class="table" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((assignmentColumn) =>
                                    (
                                        <th {...assignmentColumn.getHeaderProps()}>{assignmentColumn.render('Header')}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AssignmentTable