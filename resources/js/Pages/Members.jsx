import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Members({ auth }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [minAgeFilter, setMinAgeFilter] = useState("");
    const [maxAgeFilter, setMaxAgeFilter] = useState("");
    const [groupFilter, setGroupFilter] = useState("");

    // Dummy data
    const members = [
        {
            id: 1,
            picture: "https://via.placeholder.com/50",
            firstName: "John",
            middleName: "Doe",
            lastName: "Smith",
            extensionName: "",
            gender: "Male",
            birthdate: "1990-01-01",
            contactNumber: "123-456-7890",
            address: "123 Street, City, Country",
            group: "Kids",
        },
        // Add more members as needed
    ];

    const filteredMembers = members.filter((member) => {
        const age = calculateAge(member.birthdate);
        return (
            member.gender.toLowerCase().includes(genderFilter.toLowerCase()) &&
            age >= (minAgeFilter !== "" ? parseInt(minAgeFilter) : 0) &&
            age <= (maxAgeFilter !== "" ? parseInt(maxAgeFilter) : Infinity) &&
            (member.group.toLowerCase().includes(groupFilter.toLowerCase()) ||
                groupFilter === "") &&
            (member.firstName
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
                member.middleName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                member.lastName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                member.extensionName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                member.contactNumber.includes(searchTerm.toLowerCase()) ||
                member.address.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    function calculateAge(birthdate) {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (
            month < 0 ||
            (month === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        return age;
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Members
                        </h2>
                        <Link href="/create-member" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Register New Member</Link>
                    </div>
                </>
            }
        >
            <Head title="Members" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <input
                                type="text"
                                className="border-gray-300 border-2 rounded-md px-4 py-2 mr-2 mb-2"
                                placeholder="Search by name, contact number, or address"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <select
                                className="border-gray-300 border-2 rounded-md px-4 py-2 mr-2 mb-2"
                                value={genderFilter}
                                onChange={(e) =>
                                    setGenderFilter(e.target.value)
                                }
                            >
                                <option value="">Filter by Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                {/* Add more options if needed */}
                            </select>
                            <input
                                type="number"
                                className="border-gray-300 border-2 rounded-md px-4 py-2 mr-2 mb-2"
                                placeholder="Min Age"
                                value={minAgeFilter}
                                onChange={(e) =>
                                    setMinAgeFilter(e.target.value)
                                }
                            />
                            <input
                                type="number"
                                className="border-gray-300 border-2 rounded-md px-4 py-2 mr-2 mb-2"
                                placeholder="Max Age"
                                value={maxAgeFilter}
                                onChange={(e) =>
                                    setMaxAgeFilter(e.target.value)
                                }
                            />
                            <select
                                className="border-gray-300 border-2 rounded-md px-4 py-2 mr-2 mb-2"
                                value={groupFilter}
                                onChange={(e) => setGroupFilter(e.target.value)}
                            >
                                <option value="">Filter by Group</option>
                                <option value="kids">Kids</option>
                                <option value="youth">Youth</option>
                                <option value="leader">Leader</option>
                                <option value="pastor">Pastor</option>
                                {/* Add more options if needed */}
                            </select>
                            {filteredMembers.length === 0 && (
                                <div className="flex items-center text-gray-500">
                                    <svg
                                        className="h-6 w-6 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    No results found.
                                </div>
                            )}
                            {filteredMembers.length > 0 && (
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">
                                                Picture
                                            </th>
                                            <th className="px-4 py-2">Name</th>
                                            <th className="px-4 py-2">
                                                Gender
                                            </th>
                                            <th className="px-4 py-2">Age</th>
                                            <th className="px-4 py-2">
                                                Contact Number
                                            </th>
                                            <th className="px-4 py-2">
                                                Address
                                            </th>
                                            <th className="px-4 py-2">Group</th>
                                            <th className="px-4 py-2">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredMembers.map((member) => (
                                            <tr key={member.id}>
                                                <td className="border px-4 py-2">
                                                    <img
                                                        src={member.picture}
                                                        alt="Member"
                                                        className="w-10 h-10 rounded-full"
                                                    />
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {`${member.firstName} ${member.middleName} ${member.lastName} ${member.extensionName}`}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {member.gender}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {calculateAge(
                                                        member.birthdate
                                                    )}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {member.contactNumber}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {member.address}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {member.group}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                                        Edit
                                                    </button>
                                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
