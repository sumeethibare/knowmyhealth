import React from 'react'

function page() {
    return (
        <section className="relative text-gray-700 body-font">
            <div className="absolute inset-0 bg-gray-300">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497700.1123005915!2d77.30127814132629!3d12.95379021332858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1733257951049!5m2!1sen!2sin"
                    style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.6)' }}
                />
            </div>
            <div className="container mx-auto flex px-5 py-24">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        We love to hear your thoughts and feedback on our services.
                    </p>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 w-full text-base px-4 py-2 mt-2"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 w-full h-32 text-base px-4 py-2 mt-2 resize-none"
                                placeholder="Your Message"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-4 w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default page