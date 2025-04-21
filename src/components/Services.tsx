
const services = [
    { id: '01', title: 'Frontend Development',   description: 'Crafting responsive, modern, and user-friendly interfaces using Next.js, and Tailwind CSS.' },
    { id: '02', title: 'Backend Integration',    description: 'Connecting APIs, databases, and server-side logic for fully functional web applications.' },
    { id: '03', title: 'SEO Optimization',       description: 'Enhancing your websites visibility and ranking on search engines through best SEO practices.' },
    { id: '04', title: 'UI/UX Design',           description: 'Designing attractive and visually appealing user interfaces for optimal user experience.' },
    { id: '06', title: 'Content Management',     description: 'Managing and updating website content, including text, images, and multimedia elements.' },
    { id: '05', title: 'Maintenance & Support',  description: 'Providing ongoing maintenance and support to ensure your website remains up-to-date & secure.' },
]

const Services = () => {


    return (
        <section id="services" className="text-white px-6 md:px-12 py-16 md:py-20">
            <div className="container mx-auto flex flex-col lg:flex-row ">
                <div className="lg:w-1/4 md:w-2/4 mnpmr-8 mb-12 lg:mb-0">
                    <h2 className="text-5xl text-purple-300 font-extrabold sticky top-20">SERVICES</h2>
                </div>

                <div className="lg:w-3/4 md:w-2/4 mt-1">
                    {services.map((service) => (
                        <div key={service.id} className="mb-16 flex flex-col sm:flex-row items-start">
                            <div className="text-purple-300 font-bold text-5xl">
                                {service.id}
                            </div>

                            <div className="ml-0 sm:ml-6 mt-4 sm:mt-0">
                                <h3 className="text-2xl font-bold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
