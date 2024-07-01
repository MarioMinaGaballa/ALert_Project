import { CircleX } from "lucide-react";
import { FC, ReactNode } from "react";
import "./index.scss";
import { AlertTyps } from "../../Types";

interface IProps {
  type: AlertTyps;
  headerIcon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert: FC<IProps> = ({
  type,
  headerIcon,
  title,
  description,
  children,
}) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="alert-title">
          <span>{headerIcon}</span>
          <h3>{title}</h3>
        </div>

        <CircleX className="close" size={25} />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
