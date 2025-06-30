import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "../../src/images/Icon_1.png";


const BASE_URL = "https://news-backend-node-js.onrender.com";

const UserProfile = () => {
    const [initialValues, setInitialValues] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${BASE_URL}/user/profile`, {
                    headers: {
                        Authorization: token,
                    },
                });

                const user = response.data.userData;
                setInitialValues({
                    firstName: user.firstName || "",
                    lastName: user.lastName || "",
                    email: user.email || "",
                });
            } catch (error) {
                toast.error("Failed to load profile");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const validate = (values) => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = "First name is required";
        }
        if (!values.lastName) {
            errors.lastName = "Last name is required";
        }
        return errors;
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const token = localStorage.getItem("token");

            const payload = {
                firstName: values.firstName,
                lastName: values.lastName,
            };

            const response = await axios.put(`${BASE_URL}/user/updateProfile`, payload, {
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                },
            });

            if (response.data.success) {
                toast.success("Profile updated successfully!");
            } else {
                toast.error("Update failed. Try again.");
            }
        } catch (err) {
            console.error("Update failed", err);
            toast.error("Something went wrong!");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading || !initialValues) {
        return (
            <div className="w-10 my-20 h-10 mx-auto flex items-center justify-center">
                <img src={icon} alt="Loading..." className="slow-spin" />
            </div>
        );
    }

    return (
        <div className="pt-48 pb-24 flex justify-center items-center bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg max-w-sm w-full p-6">
                <h2 className="text-2xl font-bold text-center text-[#4360ac] mb-6">
                    Update Profile
                </h2>

                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    enableReinitialize
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block font-semibold">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full p-2 border rounded"
                                />
                                {errors.firstName && touched.firstName && (
                                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                                )}
                            </div>

                            <div>
                                <label className="block font-semibold">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full p-2 border rounded"
                                />
                                {errors.lastName && touched.lastName && (
                                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                                )}
                            </div>

                            <div>
                                <label className="block font-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    disabled
                                    className="w-full p-2 border rounded bg-gray-100"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-[#4360ac] to-[#2bace2] text-white p-2 rounded hover:from-[#2bace2] hover:to-[#4360ac] transition-all duration-300"
                            >
                                {isSubmitting ? "Updating..." : "Update Profile"}
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default UserProfile;
