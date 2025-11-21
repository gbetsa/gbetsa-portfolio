import { LucideIcon } from 'lucide-react';
import styles from './TechCard.module.css';

interface TechCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  index: number;
}

const TechCard = ({ name, description, icon: Icon, color, index }: TechCardProps) => {
  return (
    <div 
      className={styles.cardWrapper}
      style={{ 
        // Cada card fica um pouco mais abaixo que o anterior
        top: `${80 + (index * 20)}px`
      }}
    >
      <div className={`${styles.card} ${styles[color]}`}>
        <div className={styles.cardIcon}>
          <Icon size={48} />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{name}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
