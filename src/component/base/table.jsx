import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { DataGrid, faIR } from '@mui/x-data-grid';

// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'نام', width: 130 },
//     { field: 'lastName', headerName: 'نام فامیل', width: 130 },
//     {
//         field: 'age',
//         headerName: 'سن',
//         type: 'number',
//         width: 90,
//     },
//     {
//         field: 'fullName',
//         headerName: 'نام و نام خانوادگی',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
//             }`,
//     },
// ];

// const rows = [
//     { id: 1, lastName: 'پیوندی  ', firstName: 'حسین', age: 35 },
//     { id: 2, lastName: 'تابش', firstName: 'افسون ', age: 42 },
//     { id: 3, lastName: 'تبریزی', firstName: 'اهورا ', age: 45 },
//     { id: 4, lastName: 'طالقانی ', firstName: 'ايرج ', age: 16 },
//     { id: 5, lastName: 'صفوی', firstName: 'بابک ', age: null },
//     { id: 6, lastName: 'شهیدی', firstName: "پایا", age: 150 },
//     { id: 7, lastName: 'شجاعی', firstName: 'برديا ', age: 44 },
//     { id: 8, lastName: 'سراج ', firstName: 'برزويه ', age: 36 },
//     { id: 9, lastName: 'توفیقی', firstName: 'برمک ', age: 65 },
//     { id: 9, lastName: ' جلالی', firstName: null, age: 65 },
// ];
const theme = createTheme(
    {
        palette: {
            primary: { main: '#1976d2' },
        },
    },
    faIR
);
export default function DataTable({ name, handleChange, multiSelect: checkboxSelection, columns, rows,height }) {
    return (
        <div style={{ height: height ? height : 400, width: '100%' }}>
            <ThemeProvider theme={theme}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection={checkboxSelection}
                    onSelectionModelChange={(ids) => {
                        const selectedIDs = new Set(ids);
                        const selectedRowData = rows.filter((row) =>
                            selectedIDs.has(row.id));
                        console.log('table selected', name, selectedRowData);

                        handleChange({ currentTarget: { name: name, value: selectedRowData } })
                    }}

                />
            </ThemeProvider>

        </div>
    );
}
