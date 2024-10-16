import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    jobTitle: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Full Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Mobile Number is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const toastId = toast.loading("Sending your query...", {
      position: "bottom-center",
    });
    setLoading(true);

    const emailData = {
      to_name: "SecureWebexperts",
      from_name: `Query from ${formData.name}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      jobTitle: formData.jobTitle || "N/A",
    };

    emailjs
      .send(
        "service_wuc0al7",
        "template_n31q9u4",
        emailData,
        "qupSTUKhVdRDT07o2" // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.dismiss(toastId);
          toast.success("Your query was sent successfully!", {
            position: "bottom-center",
            autoClose: 2000,
          });
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            message: "",
            phone: "",
            jobTitle: "",
          });
        },
        () => {
          toast.dismiss(toastId);
          toast.error("Error in sending your query", {
            position: "bottom-center",
            autoClose: 2000,
          });
          setLoading(false);
        }
      );
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {/* Header Section */}

      <div className="w-full text-center py-32 bg-[url('/contact/bg.png')] bg-cover bg-center min-h-[330px] flex flex-col justify-center">

        <h1 className="text-4xl font-bold text-customYellow ">
          How Can We Help You?
        </h1>
        <div className="flex justify-center mt-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              className="bg-black w-full px-5 py-3 text-sm text-white rounded-full focus:outline-none shadow-md"
              placeholder="Search"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-5">
              <FiSearch size={24} className="text-gray-500" />
            </button>
          </div>
        </div>
        <p className="text-[#1C1C1C] mt-4 text-[16px]">
          Secwebxperts Support / Submit a Request
        </p>
      </div>

      {/* Talk to Us Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-around gap-10 px-5 py-10 max-w-[1300px]">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full h-[330px] lg:h-[400px] ml-[59px]">
            <img
              src="/contact/model.jpg"
              alt="Customer Support"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="font-Poppins font-bold text-[#1E2D4D] mb-4 text-[24px] leading-[29px]">
            Talk To us
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Mobile Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="Job Title (optional)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="What do you need help with?"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32 resize-none"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
            <button
              type="submit"
              className="w-full lg:w-auto bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {loading ? "Sending..." : "Request a call back"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
