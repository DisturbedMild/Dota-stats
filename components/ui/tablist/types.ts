import React, {ReactElement} from "react";

export interface ITabProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export interface ITabListProps {
  activeTabIndex: number;
  children: ReactElement<ITabProps> | React.ReactElement<ITabProps>[];
  className?: string;
  activeTabClasses?: string;
}
