import ListItem from './ListItem';
import useEffect from 'react'

const ListPassenger = props => {

    console.log(props.data)

    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>

                {props.data && props.data.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                        editPengunjung={props.editPengunjung}
                    />
                ))}
            </table>
        </div>
    )
}

export default ListPassenger;