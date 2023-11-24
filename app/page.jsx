
import React from 'react';


export default async function Index() {
  const response =  await fetch('http:localhost:3000/api/test')
  console.log(response);
  return (
    <div>
      hello
    </div>
  );
}
