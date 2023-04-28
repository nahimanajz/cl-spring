import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../../utils";
import axios from "axios";
import { toast } from "react-toastify";

const MedicinesList = () => {
    const [medicines, setMedicines] = useState([]);
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("medicines", file);

        fetch(`${SERVER_URL}/file/upload`, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                toast(data.data);
            })
            .catch((error) => {
                toast(error);
            });
    };




    const handlePrescribe = async (medicineName) => {
        const phoneNumber= '07853213732';
        return await axios.post(`${SERVER_URL}/pharmacist/medicines/${medicineName}`, { phoneNumber: phoneNumber ||localStorage.getItem("pharmacistPhoneNumber") })
            .then(response => {
                toast(response.data.data)
            })
            .catch(error => {
                toast(error.data)
            });
    }
    const fetchData = async () => {
        try {
            const { data: { data } } = await axios.get(`${SERVER_URL}/file/all/medicines`);
            setMedicines(data.filter((med) => med.medName !== 'med-name' && med.medName !== 'medName'));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="h-screen flex flex-col">
            <div className="h-1/4 bg-grey-100 shadow-lg  bg-blend-lighten md:bg-blend-darken">
                <form onSubmit={handleSubmit} className="w-96 mx-auto">
                    <div className="mb-4">
                        <label htmlFor="file" className="block mb-2 font-bold text-gray-700">
                            Choose a CSV file:
                        </label>
                        <input
                            type="file"
                            id="file"
                            accept=".csv"
                            className="p-2 border border-gray-300 rounded w-full"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
                        disabled={!file}
                    >
                        Upload
                    </button>
                </form>
            </div>
            <div className="flex-1 flex">
                <div className="flex-1 bg-green-100"></div>

                <table className="w-full mt-20">
                    <thead>
                        <tr>
                            <th className="border p-4">Medicine Name</th>
                            <th className="border p-4">Price</th>
                            <th className="border p-4">Expiry Date</th>
                            <th className="border p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicines.map((medicine, index) => (
                            <tr key={index}>
                                <td className="border p-4">{medicine.medName}</td>
                                <td className="border p-4">{medicine.medPrice}</td>
                                <td className="border p-4">{medicine.medExpiration}</td>
                                <td className="border p-4">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => handlePrescribe(medicine.medName)}
                                    >
                                        Prescribe Medicine
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )

};

export default MedicinesList;
