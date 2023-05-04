import React from 'react';
import PatientTabs from '../../components/PatientTabs';
import MedicinesList from './MedicinesList';

function Dashboard() {
    
    const tabs = [
        {
          label: "Patients",
          content: <div>Patient list</div>,
        },
        {
          label: "medicines",
          content: <MedicinesList />,
        },
      ];
     return <PatientTabs tabs={tabs} />

}

export default Dashboard;