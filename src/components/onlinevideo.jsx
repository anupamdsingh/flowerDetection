import React from 'react';

function OnlineVideo() {
  return (
    <div className="flex justify-center items-center">
      <iframe
        title="Online Video"
        className="w-full md:w-3/4 max-w-screen-lg h-96 md:h-120"
        src="https://www.istockphoto.com/video/time-lapse-of-a-bunch-of-burgundy-and-blue-peonies-blooming-on-a-black-background-gm1266491688-371291124"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}

export default OnlineVideo;