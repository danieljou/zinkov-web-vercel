import React from 'react';
import { Skeleton } from '@mui/material';

const TableSkeleton = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4"><Skeleton variant="text" /></th>
            <th className="py-2 px-4"><Skeleton variant="text" /></th>
            <th className="py-2 px-4"><Skeleton variant="text" /></th>
            <th className="py-2 px-4"><Skeleton variant="text" /></th>
            <th className="py-2 px-4"><Skeleton variant="text" /></th>
            {/* ... Autant de colonnes que nécessaire */}
          </tr>
        </thead>
        <tbody>
          {/* Générer un nombre de lignes souhaité */}
          {[...Array(30)].map((_, index) => (
            <tr key={index}>
              <td className="py-2 h-[20px] px-4"><Skeleton variant="text" /></td>
              <td className="py-2 h-[20px] px-4"><Skeleton variant="text" /></td>
              <td className="py-2 h-[20px] px-4"><Skeleton variant="text" /></td>
              <td className="py-2 h-[20px] px-4"><Skeleton variant="text" /></td>
              <td className="py-2 h-[20px] px-4"><Skeleton variant="text" /></td>
              {/* ... Autant de colonnes que nécessaire */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
