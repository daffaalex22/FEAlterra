import { useEffect, useState } from "react"
import "./Home.css"
import { gql, useLazyQuery, useQuery, useMutation } from '@apollo/client'

function PassengerInput(props) {
  const [state, setState] = useState({
    nama: "",
    umur: "",
    jenis_kelamin: "Pria",
    editing: true,
  })

  useEffect(() => {
    if (props.isEditing && props.editID) {
      const editData = props.pengunjung.find((item) => item.id === props.editID)
      setState(editData)
    }
  }, [props.isEditing, props.editID])

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    if (!state.nama.trim() || !state.umur || !state.jenis_kelamin) {
      alert("Data masih ada yang kosong")
    } else if (props.isEditing && state.nama.trim() && state.umur && state.jenis_kelamin) {
      const umur = state.umur
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else {
        const editData = {
          _eq: props.editID,
          nama: state.nama,
          umur: state.umur,
          jenis_kelamin: state.jenis_kelamin,
        }
        props.editPengunjung(editData)
        setState({
          ...state,
          nama: "",
          umur: "",
          jenis_kelamin: "Pria",
        })
      }
    } else {
      const umur = state.umur
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else {
        const newData = {
          nama: state.nama,
          umur: state.umur,
          jenis_kelamin: state.jenis_kelamin,
        }
        props.tambahPengunjung(newData)
        setState({
          ...state,
          nama: "",
          umur: "",
          jenis_kelamin: "Pria",
        })
      }
    }
  }

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    })
  }

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    })
  }

  let viewMode = {}
  let editMode = {}

  if (state?.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <div>
      <div
        onSubmit={handleSubmit}
        style={viewMode}
      >
        <p>Masukkan Nama Anda</p>
        <input
          type="text"
          className="input-text"
          placeholder="Nama anda ..."
          value={state?.nama}
          name="nama"
          onChange={onChange}
        />
        <p>Masukkan Umur Anda</p>
        <input
          type="number"
          className="input-text"
          placeholder="Umur anda ..."
          value={state?.umur}
          name="umur"
          onChange={onChange}
        />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select
          onChange={onChange}
          name="jenis_kelamin">
          <option
            value="Pria"
            selected
          >
            Pria
          </option>
          <option
            value="Wanita"
          >
            Wanita
          </option>
        </select>
        <p></p>
        <button
          onClick={handleSubmit}
        >
          {props.isEditing ? "Edit Pelanggan" : "Submit"}
        </button>
        <button
          onClick={handleTutupInput}
          style={{ marginLeft: "10px" }}
        >
          Selesai
        </button>
      </div>
      <button
        className="inputan"
        onClick={handleBukaInput}
        style={editMode}
      >
        Masukkan Nama Pelanggan
      </button>
    </div>
  )
}

export default PassengerInput
