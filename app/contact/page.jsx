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
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setMessageSent(false); // hide success msg once they start typing again
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid || loading) return;

    setLoading(true);

    emailjs
      .sendForm("service_m7ypzcy", "template_m353nut", formRef.current, "UrPJYeKLVTXpCbtAn")
      .then(
        () => {
          setMessageSent(true);
          setLoading(false);
          formRef.current?.reset();
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
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
      <div className="mx-auto w-full max-w-[1536px] px-6 xl:px-60">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-24 items-start">
          {/* Form */}
          <div className="xl:w-2/3 order-2 xl:order-1">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 rounded-xl shadow-sm
                         bg-card text-card-foreground border border-border"
            >
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">
                Let's work together
              </h3>

              <p className="text-muted-foreground mb-6">
                Feel free to drop me a message anytime! Except you, Bezos. I’ve already said no.
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Firstname"
                  required
                  className="bg-background"
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                  required
                  className="bg-background"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="bg-background"
                />
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                  className="bg-background"
                />
              </div>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="bg-background min-h-[140px]"
              />

              <Button
                type="submit"
                className="
                  uppercase flex items-center gap-2 cursor-pointer
                  bg-background text-foreground border border-border
                  transition-colors duration-300
                  hover:bg-foreground hover:text-background
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
                disabled={!isFormValid || loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {messageSent && (
                <p className="text-green-600 dark:text-green-400 mt-2 mx-auto">
                  Your message has been sent.
                </p>
              )}
            </form>
          </div>

          {/* Info Section */}
          <div className="xl:w-1/3 order-1 xl:order-2 flex flex-col gap-6">
            {info.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="text-muted-foreground text-xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
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
