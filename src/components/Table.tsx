import axios from 'axios';
import { useFetchData } from '../hooks/useFetchData';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

// Define your data type here
interface DataType {
  id: number;
  name: string;
  // Add other properties as needed
}

const DataTableComponent = () => {
  // const { data, loading, error } = useFetchData<DataType[]>('/data-endpoint');
  const { bearerToken } = useAuth();
  const apiClient = axios.create({
  baseURL: 'https://1c5neeaqt9.execute-api.eu-west-1.amazonaws.com',
  headers: {
    'Authorization': `Bearer ${bearerToken}`
  }
});

  useEffect(() => {
    console.log('bearerToken', bearerToken);
    if (bearerToken) {
      apiClient.get('/v1/studies/hiihto/measurements')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('There was an error!', error);
  });
    }
  

  },[apiClient,bearerToken]);

  return (
    <table>
      <thead>
        {/* Table headers */}
      </thead>
      <tbody>
        
      </tbody>
    </table>
  );
};

export default DataTableComponent;
