import { useState } from "react";
// import { Button } from "@/components/ui/button"; // If using shadcn/ui  
// import { Input } from "@/components/ui/input";


export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    degree: "",
    course: "",
    college: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send to Email
    window.location.href = `mailto:someone@example.com?subject=New Form Submission&body=${JSON.stringify(formData)}`;
    
    // Send to WhatsApp
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMobile: ${formData.mobile}%0ADegree: ${formData.degree}%0ACourse: ${formData.course}%0ACollege: ${formData.college}%0AYear: ${formData.year}`;
    window.open(`https://wa.me/91${formData.mobile}?text=${whatsappMessage}`, "_blank");
    
    // Send as Text (via Twilio or another API - placeholder)
    alert("Message sent via email, WhatsApp, and text!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center">User Information Form</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="tel" name="mobile" placeholder="Mobile No" onChange={handleChange} required />
        <input name="degree" placeholder="Education Degree" onChange={handleChange} required />
        <input name="course" placeholder="Course" onChange={handleChange} required />
        <input name="college" placeholder="College Name" onChange={handleChange} required />
        <input name="year" placeholder="College Year" onChange={handleChange} required />
        <button type="submit" className="w-full">Submit</button>
      </form>
    </div>
  );
}
