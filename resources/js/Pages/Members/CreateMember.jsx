import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function CreateMember({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <Link className="text-indigo-400" href="/members">
                        Members
                    </Link>{" "}
                    > Register New Member
                </h2>
            }
        >
            <Head title="Register New Member" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <form className="space-y-6">
                            {/* First Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="middleName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Middle Name
                                    </label>
                                    <input
                                        type="text"
                                        id="middleName"
                                        name="middleName"
                                        autoComplete="middle-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="extensionName"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Extension Name
                                    </label>
                                    <input
                                        type="text"
                                        id="extensionName"
                                        name="extensionName"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                {/* Second Row */}
                                <div>
                                    <label
                                        htmlFor="birthdate"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Birthdate
                                    </label>
                                    <input
                                        type="date"
                                        id="birthdate"
                                        name="birthdate"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="gender"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Gender
                                    </label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        autoComplete="gender"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="address"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Address
                                    </label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        rows="3"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    ></textarea>
                                </div>
                                {/* Third Row */}
                                <div>
                                    <label
                                        htmlFor="contactNumber"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Contact Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="contactNumber"
                                        name="contactNumber"
                                        autoComplete="tel"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="groups"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Groups
                                    </label>
                                    <select
                                        id="groups"
                                        name="groups"
                                        autoComplete="groups"
                                        multiple
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>Kids</option>
                                        <option>Youth</option>
                                        <option>Leader</option>
                                        <option>Mother</option>
                                        <option>Father</option>
                                        <option>Pastor</option>
                                    </select>
                                </div>
                                {/* Fourth Row */}
                                <div className="col-span-full">
                                    <label
                                        htmlFor="profilePicture"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Profile Picture
                                    </label>
                                    <input
                                        type="file"
                                        id="profilePicture"
                                        name="profilePicture"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
