import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import FormCoding from './FormCoding';

describe('FormPage', () => {
    test('Rendering form components', () => {
        render(<FormCoding />);
        expect(screen.getByText(/Nama Lengkap:/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
        expect(screen.getByLabelText(/No Handphone/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Latar Belakang Pendidikan/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Foto Surat Kesungguhan/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)).toBeInTheDocument();
    });

    test('Text input for name and email with invalid value', () => {
        render(<FormCoding />);
        fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
            target: { value: 'P4bl0' },
        });
        fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
            target: { value: 'Pablo Escobar' },
        });
        expect(screen.getByText('Nama Lengkap Harus Berupa Huruf')).toBeInTheDocument();
        expect(screen.getByText('Email Tidak Sesuai')).toBeInTheDocument();
        expect(screen.getByLabelText(/Nama/)).toHaveValue('P4bl0');
        expect(screen.getByLabelText(/Email/)).toHaveValue('Pablo Escobar');
    });

    // test('Number input for no Handphone with invalid value', () => {
    //     render(<FormCoding />);
    //     fireEvent.input(screen.getByRole("spinbutton", { name: /noHandphone/i }), {
    //         target: { value: '123' },
    //     });
    //     expect(screen.getByText('No Handphone Tidak Sesuai')).toBeInTheDocument();
    //     expect(screen.getByLabelText(/No Handphone/)).toHaveValue('123');
    // });

    test('Input text for name and email with valid value', () => {
        render(<FormCoding />);
        fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
            target: { value: 'Pablo Escobar' },
        });
        fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
            target: { value: 'Pablo@mail.com' },
        });
        // expect(screen.getByText('Nama Pengarang Harus Berupa Huruf')).not.toBeInTheDocument();
        // expect(screen.getByText('Email Tidak Sesuai')).not.toBeInTheDocument();
        expect(screen.getByLabelText(/Nama/)).toHaveValue('Pablo Escobar');
        expect(screen.getByLabelText(/Email/)).toHaveValue('Pablo@mail.com');
    });

    test('submit button with error', () => {
        render(<FormCoding />);
        jest.spyOn(window, 'alert').mockImplementation(() => { });
        fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
            target: { value: 'Buku Hebat' },
        });
        fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
            target: { value: 'emailmail.com' },
        });
        fireEvent.submit(screen.getByText("Submit"))
        expect(window.alert).toBeCalledWith("Data Pendaftar Tidak Sesuai");
        expect(screen.getByLabelText(/Nama/)).toHaveValue('Buku Hebat');
        expect(screen.getByLabelText(/Email/)).toHaveValue('emailmail.com');
    });

    test('submit button without error', () => {
        render(<FormCoding />);
        jest.spyOn(window, 'alert').mockImplementation(() => { });
        fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
            target: { value: 'Pablo' },
        });
        fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
            target: { value: 'pablo@mail.com' },
        });
        fireEvent.submit(screen.getByText("Submit"))
        expect(window.alert).toBeCalledWith("Data Pendaftar \"Pablo\" Berhasil Diterima");
        // expect(screen.getByLabelText(/Nama/)).toHaveValue('Pablo');
        // expect(screen.getByLabelText(/Email/)).toHaveValue('pablo@mail.com');
    });
});