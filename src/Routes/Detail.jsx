import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data))
      .catch((error) => console.error('Error fetching dentist details:', error));
  }, [id]);

  if (!dentist) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Detalles del Dentista</h1>
      <table>
        <tbody>
          <tr>
            <th>Nombre</th>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <th>Teléfono</th>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <th>Sitio Web</th>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
