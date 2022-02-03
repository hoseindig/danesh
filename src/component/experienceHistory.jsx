import Table from './base/table'


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'عنوان', width: 130 },
    { field: 'keyword', headerName: 'کلمات کلیدی', width: 170 },
    {
        field: 'isGroup', headerName: 'دانش  گروهی', width: 150,
        renderCell: (params) => (
            <strong>
                {params.value ? 'بله' : 'خیر'}
            </strong>
        ),
    },
    {
        field: 'isSpecial', headerName: 'دانش  ویژه ', width: 160,
        renderCell: (params) => (
            <strong>
                {params.value ? 'بله' : 'خیر'}
            </strong>
        ),
    },

];
let rows = []
//  [
//     { id: 1, title: 'پیوندی  ', keyword: 'حسین', isGroup: 35 },
// ];

function getSaveData() {
    const dataText = localStorage.getItem("formdata");
    let data = null
    if (dataText) {
        debugger
        data = JSON.parse(dataText)
        // data = { ...data, ...data.ExperienceBox, id: 1 }
        data.forEach((element, index) => {
            data[index] = { ...element, ...element.ExperienceBox, ...element.SpecialItemBox, id: index + 1 }

        });
        rows = data//.push(data)
    }

}
getSaveData()
const ExperienceHistory = () => {
    return (
        <div className="experience">
            <Table rows={rows} columns={columns} />
        </div >
    );
}

export default ExperienceHistory;