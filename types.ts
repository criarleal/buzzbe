
// Added import for React to resolve namespace issue
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}
