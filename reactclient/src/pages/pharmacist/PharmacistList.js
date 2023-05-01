import React, { useEffect, useState } from 'react';
import PharmacistItem from '../../components/PharmacistItem';
import axios from 'axios'
import { SERVER_URL } from '../../utils';
import { toast } from 'react-toastify';

function PharmacistList() {
  const [pharmacists, setPharmacists] = useState();
  const fetchPharmacists =async () => {
    await axios.get(`${SERVER_URL}/patient/pharmacists`)
      .then((response) => {
        setPharmacists(response.data.data);
      })
      .catch((error) => {
        toast(error.message)
      });
  }

  useEffect(() => {
    fetchPharmacists()
  }, []);
  return (
    <div className="grid grid-cols-4 gap-10 min-w-min">
      {pharmacists?.length ? (
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