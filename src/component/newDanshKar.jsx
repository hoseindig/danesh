import Table from '../component/base/table'
const NewDaneshKar = ({rows}) => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'نام', width: 130 },
        { field: 'lastName', headerName: 'نام فامیل', width: 130 },
        {
            field: 'age',
            headerName: 'سن',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'نام و نام خانوادگی',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
                }`,
        },
        { field: 'organization', headerName: 'سازمان', width: 130 },
        { field: 'percentageOfParticipation', headerName: 'درصد مشارکت', width: 130 },

    ];
    // const rows = [
    //     { id: 1, lastName: 'پیوندی  ', firstName: 'حسین', age: 35 },
    // ];
    return (<Table rows={rows} columns={columns} height={200}/>);
}

export default NewDaneshKar;