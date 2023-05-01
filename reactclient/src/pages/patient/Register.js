import axios from "axios";
import { useState } from "react";
import { SERVER_URL, checkThenNavigate } from "../../utils";
import { toast } from "react-toastify";

export function Register({ activateLogin }) {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        username: "",
        password: "",
        hasAccess: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const { data:{data} } = await axios.post(`${SERVER_URL}/patient/register`, formData)
            checkThenNavigate(data,activateLogin, 2, toast)
           
        } catch (error) {
            toast(error.message);
        }
    };

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                        htmlFor="name"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                        htmlFor="age"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                        Age
                    </label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                        htmlFor="gender"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                        Gender
                    </label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                        htmlFor="username"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                        Username
                    </label>
                    <input
                        type="text"

                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                        htmlFor="password"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"

                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                    />
                </div>
            </div>

            

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}