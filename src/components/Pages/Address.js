import Payment from './Payment';
import { useState } from 'react';
const Address = ({ totalCartPrice }) => {
  const [addressDetails, setAddressDetails] = useState({
    flatNo: '',
    area: '',
    district: '',
    phoneNumber: '',
    city: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handlePayment = () => {
    const options = {
      key: "rzp_test_shFjrnQPnV1Zul",
      amount: 1250*100, 
      currency: "INR",
      name: "Book Store",
      handler: function(response) {
        alert("Payment of Rs.$1250/- is Successful"); 
      },
      prefill: {
        name: "admin",
        email: "onlinebookstore@gmail.com",
        contact: "7412589631"
      },
      notes: {
        address: "Razorpay Corporate office"
      },
      theme: {
        color: "8e3969"
      }
    };
    const pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div>
      <div className='container'>
        <h2>Enter Your Address</h2>
        <label>
          Flat No:
          <input type="text" name="flatNo" value={addressDetails.flatNo} onChange={handleChange} />
        </label><br />
        <label>
          Area:
          <input type="text" name="area" value={addressDetails.area} onChange={handleChange} />
        </label><br />
        <label>
          District:
          <input type="text" name="district" value={addressDetails.district} onChange={handleChange} />
        </label><br />
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={addressDetails.phoneNumber} onChange={handleChange} />
        </label><br />
        <label>
          City:
          <input type="text" name="city" value={addressDetails.city} onChange={handleChange} />
        </label><br />
        <label>
          Country:
          <input type="text" name="country" value={addressDetails.country} onChange={handleChange} />
        </label><br />
        <br></br>
        <button onClick={handlePayment}>Proceed to Payment</button>
      </div>
    </div>
 );
};

export default Address;