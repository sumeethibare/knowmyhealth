"use client";
import React, { useState } from 'react';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && (
        <div className="absolute inset-0 flex items-center  gap-5 justify-center bg-white z-10">
          <span className="loading loading-spinner loading-lg"></span>
          <p>Loading...</p>
        </div>
      )}

      <div className='h-dvh p-2 relative'>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0jpEpcT4EcUkGgaQBQGYDr6UxSFs66hXlem0nta9BJAzqMoUaVAZOStY9jSUqIAUtKhv_c1sPQ?gv=true"
          style={{ border: '0', width: '100%', height: '100%' }}
          frameBorder="0"
          scrolling="no"
          title="Google Calendar Scheduling"
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
