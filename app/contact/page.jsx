"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+61 412 972 668" },
  { icon: <FaEnvelope />, title: "Email", description: "nathansivalingampersonal@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Baulkham Hills, Sydney, NSW, 2153" },
];

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if all fields are filled
  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return; // should never happen since button is disabled

    setLoading(true);

    emailjs
      .sendForm(
        "service_m7ypzcy",
        "template_m353nut",
        formRef.current,
        "UrPJYeKLVTXpCbtAn"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setMessageSent(true);
          setLoading(false);
          formRef.current.reset();
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: ""
          });
        },
        (error) => {
          console.error("Email failed:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
      className="py-12"
    >
      <div className="container mx-auto px-6 xl:px-60">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-24 items-start">

          {/* Form */}
          <div className="xl:w-2/3 order-2 xl:order-1">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-gray-100 rounded-xl shadow-sm"
            >
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">Let's work together</h3>
              <p className="text-black/80 mb-6">
                Whether it’s an opportunity or simply to get in touch, feel free to send me a message!
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" value={formData.firstname} onChange={handleChange} className="bg-gray-200" placeholder="Firstname" required />
                <Input name="lastname" value={formData.lastname} onChange={handleChange} className="bg-gray-200" placeholder="Lastname" required />
                <Input name="email" type="email" value={formData.email} onChange={handleChange} className="bg-gray-200" placeholder="Email address" required />
                <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="bg-gray-200" placeholder="Phone number" required />
              </div>

              <Textarea name="message" value={formData.message} onChange={handleChange} className="bg-gray-200" placeholder="Your message" required />

              <Button
                type="submit"
                className={`uppercase flex items-center gap-2
                            bg-white text-black
                            border border-black/40
                            transition-colors duration-300
                            hover:bg-black hover:text-white
                            cursor-pointer`}
                disabled={!isFormValid || loading} // disabled until all fields are filled
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {messageSent && (
                <p className="text-green-600 mt-2">Your message has been sent.</p>
              )}
            </form>
          </div>

          {/* Info Section */}
          <div className="xl:w-1/3 order-1 xl:order-2 flex flex-col gap-6">
            {info.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="text-black/80 text-xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-black/90">{item.title}</h4>
                  <p className="text-black/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
