import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useState, useEffect } from "react";
import { gql, useLazyQuery, useQuery } from '@apollo/client'


const Home = () => {

    const [pengunjung, setPengunjung] = useState([]);
    const [input, setInput] = useState(0)


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

    useEffect(() => {
        if (allData) {
            setPengunjung(allData.anggota)
        }
    }, [allData])

    // setPengunjung(allData?.anggota);
    console.log("Sesuatu aja");

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

    const hapusPengunjung = id => {
        setPengunjung((prevState) => (
            [...prevState.filter(item => {
                return item.id !== id;
            })]
        ))
    };

    const tambahPengunjung = newUser => {
        const newData = {
            id: uuidv4(),
            ...newUser
        };
        setPengunjung((prevState) => (
            [...prevState, newData]
        ))
    };

    const handleChange = (e) => {
        setVariables((prevState) => ({
            ...prevState,
            variables: {
                "_id": e.target.value
            }
        }))
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input) {
            getById(variables)
        }
    }

    const handleGetAll = (e) => {
        e.preventDefault()
        setPengunjung(allData.anggota)
    }

    return (
        <div>
            <Header />
            <form>
                <input type="number" name="_id" onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Search by Id</button>
                <button type="submit" onClick={handleGetAll}>Show All</button>
            </form>
            <br />
            <ListPassenger
                data={pengunjung}
                hapusPengunjung={hapusPengunjung}
            />
            <PassengerInput
                tambahPengunjung={tambahPengunjung}
            />
        </div>
    );
}

export default Home;


// class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             data : [
//                 {
//                     id: uuidv4(),
//                     nama: 'Yoga',
//                     umur: 22,
//                     jenisKelamin: 'Pria'
//                 },
//                 {
//                     id: uuidv4(),
//                     nama: 'Ria',
//                     umur: 19,
//                     jenisKelamin: 'Wanita'
//                 },
//                 {
//                     id: uuidv4(),
//                     nama: 'Fahmi',
//                     umur: 25,
//                     jenisKelamin: 'Pria'
//                 },
//                 {
//                     id: uuidv4(),
//                     nama: 'Lala',
//                     umur: 21,
//                     jenisKelamin: 'Wanita'
//                 },
//                 {
//                     id: uuidv4(),
//                     nama: 'Ivan',
//                     umur: 25,
//                     jenisKelamin: 'Pria'
//                 }
//             ]

//         }
//     }

//     hapusPengunjung = id => {
//         this.setState({    
//             data: [      
//                 ...this.state.data.filter(item => {        
//                     return item.id !== id;      
//                 })    
//             ]  
//         });
//     };

//     tambahPengunjung = newUser => {
//         const newData = {
//             id: uuidv4(),
//             ...newUser
//         }; 
//         this.setState({    
//             data: [...this.state.data, newData]  
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <Header/>
//                 <ListPassenger 
//                     data={this.state.data}
//                     hapusPengunjung={this.hapusPengunjung}
//                 />
//                 <PassengerInput
//                     tambahPengunjung={this.tambahPengunjung}
//                 />
//             </div>
//         )
//     }
// }

// export default Home;