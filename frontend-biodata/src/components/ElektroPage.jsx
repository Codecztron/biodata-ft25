import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Search} from 'lucide-react';

const ElektroPage = () => {
const [biodataData, setBiodataData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/data/json/elektro.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBiodataData(data.elektro || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

    // Filter function for search
  const filteredData = biodataData.filter((biodata) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      biodata.data.nama.toLowerCase().includes(searchValue) ||
      biodata.data.nim.toLowerCase().includes(searchValue) ||
      biodata.data.asal.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-blue-600 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Kembali ke Beranda</span>
        </Link>

        {/* Header */}
        <div className="text-center lg:mb-12 mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full text-white font-bold lg:text-lg text-sm lg:mb-6 mb-4 shadow-lg">
            <Zap className="w-6 h-6" />
            <span>Teknik Elektro</span>
          </div>
          <h1 className="text-xl lg:text-5xl font-bold text-gray-800 lg:mb-4 mb-1">
            Biodata Mahasiswa
          </h1>
          <p className="lg:text-xl text-sm text-gray-600">Program Studi Teknik Elektro</p>
        </div>


        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama, NIM, atau asal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Biodata Cards */}
        <div className="w-full flex items-start gap-6 flex-wrap justify-center">
          {filteredData.map((biodata, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl lg:h-40 lg:w-80 h-32 w-80 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="bg-gray-200 flex h-full">
                <div className="w-32 lg:w-40 h-full overflow-hidden">
                  <img
                    src={biodata.foto}
                    className="w-full h-full object-cover"
                    alt={biodata.data.nama}
                  />
                </div>
                <div className="w-full flex flex-col justify-start p-2 space-y-1 text-xs text-gray-800">
                  <p className="font-semibold text-sm">{biodata.data.nama}</p>
                  <p>{biodata.data.asal}</p>
                  <p>{biodata.data.nim}</p>
                  <p>{biodata.data.tanggalLahir}</p>
                  <p>{biodata.data.nim}@mail.unej.ac.id</p>
                  <p>{biodata.data.telepon}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ElektroPage;