import React, { useState } from 'react';
import { AlertTriangle, X, Bug, Eye } from 'lucide-react';

interface BugReportWidgetProps {
  bugId: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  location: string;
  type: 'display' | 'functionality' | 'responsive' | 'content' | 'performance';
  className?: string;
}

const BugReportWidget: React.FC<BugReportWidgetProps> = ({
  bugId,
  description,
  severity,
  location,
  type,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  if (!isVisible) return null;

  const severityColors = {
    low: 'bg-yellow-100 border-yellow-400 text-yellow-800',
    medium: 'bg-orange-100 border-orange-400 text-orange-800',
    high: 'bg-red-100 border-red-400 text-red-800',
    critical: 'bg-red-200 border-red-600 text-red-900'
  };

  const typeIcons = {
    display: '🎨',
    functionality: '⚙️',
    responsive: '📱',
    content: '📝',
    performance: '⚡'
  };

  return (
    <div className={`fixed z-[9999] ${className}`}>
      {/* Bug indicator */}
      <div className="relative">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse ${severityColors[severity]}`}
          title={`Bug détecté: ${description}`}
        >
          <AlertTriangle size={16} />
        </button>

        {/* Severity indicator */}
        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
          severity === 'critical' ? 'bg-red-600' :
          severity === 'high' ? 'bg-red-500' :
          severity === 'medium' ? 'bg-orange-500' :
          'bg-yellow-500'
        }`}></div>

        {/* Details popup */}
        {showDetails && (
          <div className="absolute top-10 left-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 z-[10000]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Bug size={16} className="text-red-600" />
                <span className="font-semibold text-sm">Bug Report #{bugId}</span>
              </div>
              <button
                onClick={() => setShowDetails(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={14} />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{typeIcons[type]}</span>
                  <span className="text-xs font-medium text-gray-600 uppercase">{type}</span>
                </div>
                <p className="text-sm text-gray-800 font-medium">{description}</p>
              </div>

              <div className="text-xs text-gray-600">
                <div className="flex items-center gap-1 mb-1">
                  <Eye size={12} />
                  <span>Localisation: {location}</span>
                </div>
                <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${severityColors[severity]}`}>
                  Priorité: {severity.toUpperCase()}
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Marquer comme vu
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BugReportWidget;