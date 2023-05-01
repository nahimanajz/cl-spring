import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SERVER_URL } from '../../utils';
import PhysicianItem from '../../components/PhysicianItem';

function PhysicianList() {
  const [physicians, setPhysicians] = useState([]);
  const [error, setError] = useState()
  const fetchPhysicians = async () =>{
    await axios.get(`${SERVER_URL}/patient/physicians`)
      .then((response) => {
        setPhysicians(response.data.data);
      })
      .catch((error) => {
        setError("Something went wrong")
      });
  }
  useEffect(() => {
    fetchPhysicians()
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