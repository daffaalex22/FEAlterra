import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useState, useEffect } from "react";
import { useQuery, useMutation, useSubscription } from '@apollo/client'
import { INSERT_PENGUNJUNG, DELETE_PENGUNGJUNG_BY_ID, EDIT_PENGUNGJUNG, GET_ANGGOTAS, SUBSCRIBE_PENGUNJUNG } from '../queries'
import Loading from "./Loading";
import errorHandler from "./errorHandle";


const Home = () => {

    const [variables, setVariables] = useState({
        variables: {
            "id": {}
        }
    })

    const {
        data: subsData,
        loading: subsLoading,
        error: subsError
    } = useSubscription(SUBSCRIBE_PENGUNJUNG, variables);

    // const {
    //     loading: allLoading,
    //     error: allError,
    //     data: allData,
    //     refetch: refetchAll
    // } = useQuery(GET_ANGGOTAS, variables);

    const [
        insertAnggota, {
            data: insertData,
            loading: insertLoading,
            error: insertError
        }
    ] = useMutation(INSERT_PENGUNJUNG)

    const [
        deleteAnggotaById, {
            data: deleteData,
            loading: deleteLoading,
            error: deleteError
        }
    ] = useMutation(DELETE_PENGUNGJUNG_BY_ID);

    const [
        editPengunjung, {
            data: editData,
            loading: editLoading,
            error: editError
        }
    ] = useMutation(EDIT_PENGUNGJUNG);

    const [pengunjung, setPengunjung] = useState([]);
    const [input, setInput] = useState(0);

    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(0);

    useEffect(() => {
        if (subsData) {
            setPengunjung(subsData.anggota)
        }
    }, [subsData])

    if (subsLoading || insertLoading || editLoading || deleteLoading) {
        return (<Loading />)
    }

    if (subsError) {
        return `Error! ${subsError.message}`;
    }

    if (insertError) {
        return `Error! ${insertError.message}`;
    }

    if (deleteError) {
        return `Error! ${deleteError.message}`;
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
        setInput(e.target.value)
    }

    const handleSearchById = (e) => {
        e.preventDefault()
        if (input) {
            setVariables((prevState) => ({
                ...prevState,
                variables: {
                    "id": {
                        "_eq": input
                    }
                }
            }))
        }
    }

    const handleGetAll = (e) => {
        e.preventDefault()
        setVariables((prevState) => ({
            ...prevState,
            variables: {
                "id": {}
            }
        }))
    }

    const handleEdit = (id) => {
        setIsEditing(true);
        setEditID(id);
    }

    const closeForm = () => {
        setIsEditing(false)
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
                closeForm={closeForm}
            />
        </div>
    );
}

export default Home;