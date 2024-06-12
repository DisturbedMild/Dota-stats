import React from "react";

import {ITabProps} from "@components/ui/tablist/types";
import {sanitizeForId} from "@/common/utils/stringUtils";

const TabItem: React.FC<ITabProps> = ({label, children, className}: ITabProps) => (
  <div
    className={`tab-panel ${className}`}
    role="tabpanel"
    aria-labelledby={`tab-${sanitizeForId(label)}`}
    id={`panel-${sanitizeForId(label)}`}
  >
      {children}
  </div>
);

export default TabItem;
