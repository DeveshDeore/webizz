const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitting form data:", formData); // Debug log

  // Validate form data
  if (
    !formData.name ||
    !formData.mobile ||
    !formData.email ||
    !formData.degree ||
    !formData.age ||
    !formData.college ||
    !formData.course
  ) {
    alert("Please fill in all required fields");
    return;
  }

  try {
    const response = await fetch("http://localhost:5004/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
      mode: "cors",
    });

    console.log("Response status:", response.status); // Debug log

    const data = await response.json();
    console.log("Response data:", data); // Debug log

    if (response.ok) {
      alert("✅ Form Submitted Successfully!");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        degree: "",
        field: "",
        age: "",
        college: "",
        course: "",
        description: "",
      });
    } else {
      alert(`❌ Error: ${data.message || "Something went wrong!"}`);
    }
  } catch (error) {
    console.error("Detailed error:", error); // Debug log
    alert(
      "❌ Network Error: Please make sure the server is running on port 5004"
    );
  }
};
