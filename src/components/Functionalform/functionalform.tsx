import React, { useState } from 'react';

interface FormDataItem {
  name: string;
  email: string;
  message: string;
}

const FormSubmission: React.FC = () => {
  const [formData, setFormData] = useState<FormDataItem[]>([
    {
    name: '',
    email: '',
    message: ''
  },
  {
    name: '',
    email: '',
    message: ''
  }
]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { name, value } = e.target;

    setFormData(prevFormData => {
      const updatedFormData = [...prevFormData];
      updatedFormData[index] = {
        ...updatedFormData[index],
        [name]: value
      };
      return updatedFormData;
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Here you can handle the submission, for example, send the form data to a server
    console.log(formData);
    // Reset form after submission
  };

  return (
    <div>
       <form onSubmit={handleSubmit}>
        {formData.map((data, index) => (
            <div key={index}>
            <input type="text" name="name" value={data.name} onChange={(e) => handleChange(e, index)} />
            <input type="text" name="email" value={data.email} onChange={(e) => handleChange(e, index)} />
            <textarea name="message" value={data.message} onChange={(e) => handleChange(e, index)} />
            </div>
        ))}
       <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSubmission;
