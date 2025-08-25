import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Cog, Building, Wrench, Cpu, Beaker, Palette, Calculator } from 'lucide-react';

const HomePage = () => {
  const programStudi = [
    {
      id: 'elektro',
      nama: 'Teknik Elektro',
      deskripsi: 'Program studi yang mempelajari listrik, elektronika, dan sistem tenaga',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      link: '/elektro'
    },
    {
      id: 'mesin',
      nama: 'Teknik Mesin',
      deskripsi: 'Program studi yang mempelajari mekanika, termodinamika, dan manufaktur',
      icon: Cog,
      color: 'from-gray-400 to-gray-600',
      link: '#'
    },
    {
      id: 'sipil',
      nama: 'Teknik Sipil',
      deskripsi: 'Program studi yang mempelajari infrastruktur dan konstruksi bangunan',
      icon: Building,
      color: 'from-green-400 to-emerald-600',
      link: '#'
    },
        {
      id: 'pwk',
      nama: 'Perencanaan Wilayah dan Kota',
      deskripsi: 'Program studi yang mempelajari tata ruang dan pengembangan wilayah',
      icon: Building,
      color: 'from-blue-400 to-blue-600',
      link: '#'
    },
    // {
    //   id: 'industri',
    //   nama: 'Teknik Industri',
    //   deskripsi: 'Program studi yang mempelajari optimasi sistem dan manajemen produksi',
    //   icon: Wrench,
    //   color: 'from-blue-400 to-blue-600',
    //   link: '#'
    // },
    // {
    //   id: 'informatika',
    //   nama: 'Teknik Informatika',
    //   deskripsi: 'Program studi yang mempelajari pemrograman dan sistem komputer',
    //   icon: Cpu,
    //   color: 'from-purple-400 to-indigo-600',
    //   link: '#'
    // },
    {
      id: 'kimia',
      nama: 'Teknik Kimia',
      deskripsi: 'Program studi yang mempelajari proses kimia dan industri petrokimia',
      icon: Beaker,
      color: 'from-teal-400 to-cyan-600',
      link: '#'
    },
    // {
    //   id: 'arsitektur',
    //   nama: 'Arsitektur',
    //   deskripsi: 'Program studi yang mempelajari desain dan perencanaan bangunan',
    //   icon: Palette,
    //   color: 'from-pink-400 to-rose-600',
    //   link: '#'
    // }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-xl md:text-6xl font-bold text-gray-800 lg:mb-6 mb-3">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Biodata Mahasiswa
            </span>
          </h1>
          <p className="lg:text-xl text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pilih program studi untuk melihat biodata mahasiswa dari berbagai jurusan di universitas kami
          </p>
          <div className="lg:mt-8 mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Program Studi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {programStudi.map((prodi) => {
            const IconComponent = prodi.icon;
            const CardComponent = prodi.link !== '#' ? Link : 'div';
            
            return (
              <CardComponent
                key={prodi.id}
                to={prodi.link !== '#' ? prodi.link : undefined}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                  prodi.link === '#' ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prodi.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative lg:p-8 p-4">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${prodi.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
                  </div>
                  {/* Title */}
                  <h3 className="lg:text-xl text-sm font-bold text-gray-800 lg:mb-3 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                    {prodi.nama}
                  </h3>
                  
                  
                  {/* Description */}
                  <p className="text-gray-600 lg:text-sm text-xs leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {prodi.deskripsi}
                  </p>
                  
                  {/* Status Badge */}
                  {prodi.link !== '#' ? (
                    <div className="lg:mt-6 mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Tersedia
                    </div>
                  ) : (
                    <div className="mt-6 inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                      Segera Hadir
                    </div>
                  )}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 rounded-2xl transition-all duration-300"></div>
              </CardComponent>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            © 2025 create by <span className="font-semibold text-gray-800">codecz</span>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;