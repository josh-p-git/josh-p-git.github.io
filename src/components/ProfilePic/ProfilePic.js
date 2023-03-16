import React from 'react';

export default function ProfilePic({ imageProp = 'default-image-url' }) {
  return (
    <div>
      <img src={imageProp} alt="Profile Picture" />
    </div>
  );
}