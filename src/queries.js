import { gql } from '@apollo/client'

const SUBSCRIBE_PENGUNJUNG = gql`subscription MySubscription($id: Int_comparison_exp = {}) {
  anggota(where: {id: $id}) {
    id
    nama
    umur
    jenis_kelamin
  }
}`

const GET_ANGGOTAS = gql`query MyQuery($id: Int_comparison_exp = {}) {
  anggota(where: {id: $id}) {
    id
    nama
    umur
    jenis_kelamin
  }
}`

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

export { INSERT_PENGUNJUNG, DELETE_PENGUNGJUNG_BY_ID, EDIT_PENGUNGJUNG, GET_ANGGOTAS, SUBSCRIBE_PENGUNJUNG };