
import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#1b263b]/40 p-10 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all duration-500 group">
      <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 text-buzz-blue group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/60 leading-relaxed text-[15px]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
