import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'
import { SERVER_URL } from '../../utils';
import PhysicianItem from '../../components/PhysicianItem';

function PhysicianList() {
  const [physicians, setPhysicians] = useState([{
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    email: "example@gmail.com"
  },
  {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    email: "example@gmail.com"
  },
  {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    email: "example@gmail.com"
  },
  {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    email: "example@gmail.com"
  },
  {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    email: "example@gmail.com"
  },
  {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    email: "example@gmail.com"
  },
  {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    email: "example@gmail.com"
  },
  {
    name: "example Name",
    age: 23,
    gender: "Male",
    hasAccess: false,
    email: "example@gmail.com"
  }
  ]);
  const [error, setError] = useState()

  useEffect(() => {
    axios.get(`${SERVER_URL}/physicians`)
      .then((response) => {
        setPhysicians(response.data);
      })
      .catch((error) => {
        setError("Something went wrong")
      });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-10 min-w-min">
      {physicians.length ? (
        physicians.map((item, index) => (
          <div key={index}>
            <PhysicianItem item={item} />
          </div>
        ))
      ) : (
        <div className="text-red-500">
          {error ? error : `No Physician added yet`}

        </div>
      )}
    </div>

  );
}

export default PhysicianList;