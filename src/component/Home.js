import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useState, useEffect } from "react";
import { gql, useLazyQuery, useQuery, useMutation } from '@apollo/client'


const Home = () => {
    const INSERT_PENGUNJUNG = gql`mutation MyMutation($jenis_kelamin: String!, $nama: String!, $umur: Int!) {
        insert_anggota(objects: {umur: $umur, nama: $nama, jenis_kelamin: $jenis_kelamin}) {
          affected_rows
        }
      }`

    const DELETE_PENGUNGJUNG_BY_ID = gql`mutation HapusPengunjung($id: Int!) {
        delete_anggota_by_pk(id: $id) {
          id
        }
      }`

    const EDIT_PENGUNGJUNG = gql`mutation EditPengunjung($_eq: Int = 9, $nama: String!, $jenis_kelamin: String!, $umur: Int!) {
        update_anggota(where: {id: {_eq: $_eq}}, _set: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
          affected_rows
        }
      }`

    const GET_DATA = gql`
    query MyQuery {
        anggota {
          id
          nama
          umur
          jenis_kelamin
        }
      }`

    const GET_DATA_BYID = gql`
    query MyQuery($_id: Int!) {
        anggota(where: {id: {_eq: $_id}}) {
          nama
          umur
          jenis_kelamin
        }
      }`

    const [variables, setVariables] = useState({
        variables: {
            "_id": 1
        }
    })


    const { loading: allLoading, error: allError, data: allData } = useQuery(GET_DATA);
    const [getById, { loading: singleLoading, error: singleError, data: singleData }] = useLazyQuery(GET_DATA_BYID, variables);
    const [insertAnggota, { data: insertData, loading: insertLoading, error: insertError }] = useMutation(INSERT_PENGUNJUNG, { refetchQueries: [GET_DATA] })
    const [deleteAnggotaById, { data: deleteData, loading: deleteLoading, error: deleteError }] = useMutation(DELETE_PENGUNGJUNG_BY_ID, { refetchQueries: [GET_DATA] });
    const [editPengunjung, { data: editData, loading: editLoading, error: editError }] = useMutation(EDIT_PENGUNGJUNG, { refetchQueries: [GET_DATA] });

    const [pengunjung, setPengunjung] = useState([]);
    const [input, setInput] = useState(0);

    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(0);

    useEffect(() => {
        if (allData) {
            setPengunjung(allData.anggota)
        }
    }, [allData])

    useEffect(() => {
        if (singleData) {
            setPengunjung(singleData.anggota)
        }
    }, [singleData])


    if (allLoading) {
        return 'Loading...';
    }

    if (allError) {
        return `Error! ${allError.message}`;
    }

    if (singleLoading) {
        return 'Loading...';
    }

    if (singleError) {
        return `Error! ${singleError.message}`;
    }

    if (insertLoading) {
        return 'Loading...';
    }

    if (insertError) {
        return `Error! ${insertError.message}`;
    }

    if (deleteLoading) {
        return 'Loading...';
    }

    if (deleteError) {
        return `Error! ${deleteError.message}`;
    }

    if (editLoading) {
        return 'Loading...';
    }

    if (editError) {
        return `Error! ${editError.message}`;
    }

    const hapusPengunjung = id => {
        let deleteVar = {
            variables: {
                "id": id
            }
        }
        deleteAnggotaById(deleteVar);
    };

    const tambahPengunjung = newUser => {
        insertAnggota({ variables: newUser })
    };

    const ubahPengunjung = editData => {
        editPengunjung({ variables: editData });
        setIsEditing(false)
        setEditID(0)
    };

    const handleChangeId = (e) => {
        setVariables((prevState) => ({
            ...prevState,
            variables: {
                "_id": e.target.value
            }
        }))
        setInput(e.target.value)
    }

    const handleSearchById = (e) => {
        e.preventDefault()
        if (input) {
            getById(variables)
        }
    }

    const handleGetAll = (e) => {
        e.preventDefault()
        setPengunjung(allData.anggota)
    }

    const handleEdit = (id) => {
        setIsEditing(true);
        setEditID(id);
    }

    return (
        <div>
            <Header />
            <form>
                <input
                    type="number"
                    name="_id"
                    onChange={handleChangeId}
                />
                <button
                    type="submit"
                    onClick={handleSearchById}
                >
                    Search by Id
                </button>
                <button
                    type="submit"
                    onClick={handleGetAll}
                >
                    Show All
                </button>
            </form>
            <br />
            <ListPassenger
                data={pengunjung}
                hapusPengunjung={hapusPengunjung}
                editPengunjung={handleEdit}
            />
            <PassengerInput
                tambahPengunjung={tambahPengunjung}
                editPengunjung={ubahPengunjung}
                editID={editID}
                isEditing={isEditing}
                pengunjung={pengunjung}
            />
        </div>
    );
}

export default Home;