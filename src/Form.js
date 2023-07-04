import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    payment: '',
    products: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const submitForm = () => {
    const url = 'https://script.google.com/macros/s/AKfycbyJTa0tOpOkre0T2eyg1iqqmVY8TUKV2a-lL385aBrz_gPgosX2U_wJ52KNQ_vLII7dEg/exec'; 
    const formDataPayload = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataPayload.append(key, value);
    });

    fetch(url, {
      method: 'POST',
      body: formDataPayload
    })
      .then(response => {
        console.log('Form submitted successfully');
        setFormData({
          name: '',
          phoneNumber: '',
          address: '',
          payment: '',
        });
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className='mx-32'>
      <form onSubmit={handleSubmit} className="border rounded p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2 font-medium">Phone number:</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2 font-medium">Address:</label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Payment:</label>
          <div>
            <input
              type="radio"
              id="cash"
              name="payment"
              value="cash"
              checked={formData.payment === 'cash'}
              onChange={handleChange}
              className="mr-1"
            />
            <label htmlFor="cash" className="mr-4">Cash</label>
          </div>
          <div>
            <input
              type="radio"
              id="bank"
              name="payment"
              value="bank"
              checked={formData.payment === 'bank'}
              onChange={handleChange}
              className="mr-1"
            />
            <label htmlFor="bank">Bank</label>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 border-2 border-black rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
