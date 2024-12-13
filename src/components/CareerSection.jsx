export default function CareerSection() {
    const jobs = [
        {
            position: "Marketing Team",
            department: "Marketing",
            location: "San Francisco"
        },
        {
            position: "Human Relations",
            department: "Support",
            location: "San Francisco"
        },
        {
            position: "Art Director",
            department: "Design",
            location: "San Francisco"
        },
        {
            position: "React Developer",
            department: "Engineering",
            location: "San Francisco"
        }
    ]

    return (
        <section className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Want To Be A Part Of Us?
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We believe it takes great people to make a great product. Jobs that are available from us are looking for
                    their own people! Browse our vacancies and find the one that is right for you!
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
                {/* Header */}
                <div className="hidden md:grid md:grid-cols-3 px-6 py-3 bg-gray-50 rounded-t-lg">
                    <div className="font-semibold text-gray-600">Position</div>
                    <div className="font-semibold text-gray-600">Department</div>
                    <div className="font-semibold text-gray-600">Location</div>
                </div>

                {/* Job Listings */}
                <div className="divide-y divide-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-0 p-6">
                        <span className="md:hidden text-gray-600 mr-2">Position: </span>
                        <span className="md:hidden text-gray-600 mr-2">Department: </span>
                        <span className="hidden text-gray-600 mr-2">Location: </span>
                    </div>
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-0 p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                        >
                            <div className="font-medium">

                                {job.position}
                            </div>
                            <div className="text-gray-600">

                                {job.department}
                            </div>
                            <div className=" hidden text-gray-600">

                                {job.location}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center">
                <button className="bg-[#003952] text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#002b3f] transition-colors duration-200">
                    Don't see a good fit? Submit your resume
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </button>
            </div>
        </section>
    )
}

