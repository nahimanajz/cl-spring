import React, { useEffect, useState } from 'react';
import PharmacistItem from '../../components/PharmacistItem';
import axios from 'axios'

function PharmacistList() {
  const [pharmacists, setPharmacists] = useState([{
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    PhoneNumber: "078523453"
  },
   {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    PhoneNumber: "078523453"
  },
  {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    PhoneNumber: "078523453"
  },
   {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    PhoneNumber: "078523453"
  },
  {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    PhoneNumber: "078523453"
  },
   {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    PhoneNumber: "078523453"
  },
  {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    PhoneNumber: "078523453"
  },
   {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    PhoneNumber: "078523453"
  }
]);
  const [error, setError] = useState()

  useEffect(() => {
    axios.get("http://localhost:9000/api/v1/pharmacist")
      .then((response) => {
        setPharmacists(response.data);
      })
      .catch((error) => {
        setError("Something went wrong")
      });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-10 min-w-min">
      {pharmacists.length ? (
        pharmacists.map((item, index) => (
          <div key={index}>
            <PharmacistItem item={item} />
          </div>
        ))
      ) : (
          <div className="text-red-500">No Pharmacist added yet</div>
      )}
    </div>

  );
}

export default PharmacistList;