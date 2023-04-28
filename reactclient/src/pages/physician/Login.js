import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { SERVER_URL, checkThenNavigate } from "../../utils";

export function Login({showDashboard}) {
    const [formData, setFormData] = useState({
        email: "",
        password: ""

    });
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const { data:{data} } = await axios.post(`${SERVER_URL}/physician/login`, formData)
            checkThenNavigate(data, showDashboard, true)
            localStorage.setItem("email",formData.email)
           
        } catch (error) {
            toast(error.message);
        }
    };
    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label
                        htmlFor="email"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
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