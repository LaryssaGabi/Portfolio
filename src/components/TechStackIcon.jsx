// src/components/TechStackIcon.jsx
import StackIcon from 'tech-stack-icons';

const TechStackIcon = ({ name, language, customIcon, localIcon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
      <div className="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
        {localIcon ? (
          // Ícone local da pasta public
          <img 
            src={localIcon} 
            alt={language}
            className="w-full h-full object-contain"
          />
        ) : customIcon ? (
          // Ícone customizado via URL externa
          <img 
            src={customIcon} 
            alt={language}
            className="w-full h-full object-contain"
          />
        ) : (
          // Ícone da biblioteca tech-stack-icons
          <StackIcon name={name} className="w-full h-full" />
        )}
      </div>
      <span className="text-slate-300 text-sm font-medium text-center group-hover:text-white transition-colors">
        {language}
      </span>
    </div>
  );
};

export default TechStackIcon;