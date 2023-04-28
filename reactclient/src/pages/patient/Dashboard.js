import React from 'react';
import PharmacistList from '../pharmacist/PharmacistList';
import PatientTabs from '../../components/PatientTabs';
import PhysicianList from '../physician/PhysicianList';
import { Consultations } from '../../components/Consultations';

function Dashboard() {
    
    const tabs = [
        {
          label: "Pharmacists",
          content: <PharmacistList />,
        },
        {
          label: "Physicians",
          content: <PhysicianList />,
        },
        {
          label: "consultations",
          content: <Consultations />,
        },
      ];
     return <PatientTabs tabs={tabs} />

}

export default Dashboard;