'use client';

import { useState } from 'react';
import UploadCsv from './UploadFile';
import UploadFormPage from './UploadForm';

export default function FilesPage() {
  // 'csv' will be the default visible panel
  const [active, setActive] = useState<'csv' | 'form'>('csv');

  return (
    <div className="flex flex-col mt-22 items-center justify-center min-h-screen bg-gray-100 space-y-6">
      {/* selector */}
      <label htmlFor="upload-method" className="sr-only">
        Select upload method
      </label>
      <select
        id="upload-method"
        value={active}
        onChange={(e) => setActive(e.target.value as 'csv' | 'form')}
        className="px-4 py-2 rounded-md border bg-white"
        aria-label="Select upload method"
      >
        <option value="csv">Upload CSV</option>
        <option value="form">Upload Form</option>
      </select>

      {/* content area */}
      <div className="w-full p-4 bg-white rounded shadow">
        {active === 'csv' ? <UploadCsv /> : <UploadFormPage />}
      </div>
    </div>
  );
}
