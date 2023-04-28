import React from 'react'
import { SERVER_URL } from '../utils';
import axios from 'axios';

/**
 * Fetch list of consultations that a patient can download
* @author
* @function Consulations
**/

export const Consultations = (props) => {

  const downloadFile = async () => {
    const response = await axios({
      url: `${SERVER_URL}/file/download`,
      method: "GET",
      responseType: "blob"
    });
    
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "transcription.csv");
    document.body.appendChild(link);
    link.click();
  };

  return <button onClick={downloadFile}>Download Transcription</button>;

 }