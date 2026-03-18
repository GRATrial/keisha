import React from 'react';

interface KnowledgePanelProps {
  isDark?: boolean;
}

export const KnowledgePanel: React.FC<KnowledgePanelProps> = ({ isDark = false }) => {
  // No knowledge panel for "Keisha Williams" search - no famous person with this exact name
  return null;
};
